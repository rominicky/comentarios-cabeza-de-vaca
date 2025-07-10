document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.map-hover');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const placeKey = item.dataset.placeKey;
      showFloatingMap(item, placeKey);
    });

    item.addEventListener('mouseleave', () => {
      scheduleMapRemoval(); // espera un poco para permitir mover el mouse al mapa
    });
  });
});

let currentFloatingMap = null;
let mapRemovalTimeout = null;

function showFloatingMap(anchor, placeKey) {
  const coords = Places[placeKey];
  if (!coords) return;

  removeFloatingMap(); // limpia cualquier mapa anterior

  const preview = document.createElement('div');
  preview.id = 'map-preview';
  preview.style.position = 'absolute';
  preview.style.width = '300px';
  preview.style.height = '200px';
  preview.style.border = '2px solid black';
  preview.style.zIndex = 9999;
  preview.style.top = (anchor.getBoundingClientRect().bottom + window.scrollY + 5) + 'px';
  preview.style.left = (anchor.getBoundingClientRect().left + window.scrollX) + 'px';
  preview.style.background = '#fff';
  preview.style.boxShadow = '0 0 5px rgba(0,0,0,0.4)';
  preview.style.pointerEvents = 'auto';

  document.body.appendChild(preview);
  currentFloatingMap = preview;

  const map = L.map(preview, {
    zoomControl: true,
    scrollWheelZoom: true,
    dragging: true,
    tap: false
  }).setView(coords, 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors'
  }).addTo(map);

  L.marker(coords).addTo(map).bindPopup(placeKey).openPopup();

  // Si el mouse sale del mapa, lo cierra
  preview.addEventListener('mouseleave', () => {
    removeFloatingMap();
  });

  // Si entra al mapa, cancela el cierre programado
  preview.addEventListener('mouseenter', () => {
    if (mapRemovalTimeout) {
      clearTimeout(mapRemovalTimeout);
    }
  });
}

function scheduleMapRemoval() {
  // Espera 300ms para permitir mover el mouse al mapa
  mapRemovalTimeout = setTimeout(() => {
    removeFloatingMap();
  }, 300);
}

function removeFloatingMap() {
  if (currentFloatingMap) {
    currentFloatingMap.remove();
    currentFloatingMap = null;
  }
}
