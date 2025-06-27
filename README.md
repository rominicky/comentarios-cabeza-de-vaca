# Comentarios de Álvar Núñez Cabeza de Vaca  
## Diseñado y mantenido por Romina De León
### HDLAB - CONICET

Este repositorio presenta una visualización interactiva basada en la edición del texto publicado por LLILAS Benson de la obra [*Comentarios* de Álvar Núñez Cabeza de Vaca](https://collections.lib.utexas.edu/catalog/utblac:be9bfa47-9704-483e-a461-9588875230b8). El objetivo de este trabajo es enriquecer la experiencia lectora de una obra clave para comprender las disputas políticas de los primeros años de la conquista en América del Sur.

Esta edición digital está enriquecida con anotaciones, recursos cualitativos y cuantitativos (aún no publicados), y un mapa interactivo que representa el itinerario de Cabeza de Vaca por las tierras del sur de América. Los mapas permiten explorar documentos históricos vinculados al Río de la Plata, y cada página contiene textos con anotaciones y marcas paratextuales.

## 🌐 Sitio en línea

👉 [https://rominicky.github.io/comentarios-cabeza-de-vaca](https://rominicky.github.io/comentarios-cabeza-de-vaca)

## 🗺️ ¿Qué contiene este sitio?

Aquí encontrarás un *storymap* que combina narrativa textual, fuentes históricas y visualización geoespacial. Una selección de la edición **Comentarios** fue transformada desde archivos XML, a HTML y se presenta en una interfaz interactiva que permite navegar por eventos y recorridos vinculados a lugares concretos.

## 📁 Estructura del proyecto

- `/assets/downloads`: permite descargar la fuente original en formatos PDF, EPUB, texto plano y XML.
- `/assets/`: contiene imágenes, íconos y hojas de estilo.
- `/includes/`: fragmentos HTML reutilizables (navegación, tarjetas, etc.).
- `/TEI/`: archivos XML con los datos fuente.
- `/pagina.html`: plantilla principal para generar páginas individuales.
- `/index.html`: portada del sitio.

## ⚙️ ¿Cómo funciona?

1. **Carga de datos XML**: los archivos en `/TEI/` contienen los contenidos estructurados, con metadatos y coordenadas.
2. **Transformación a HTML**: se generan páginas individuales `*.html`.
3. **Mapas interactivos**: cada entrada puede incluir una burbuja geolocalizada con contexto y enlaces.

## 🛠️ Personalización

- Modificá los íconos en `/assets/img/icon/`
- Editá los XML en `/TEI/` para actualizar contenidos
- Personalizá estilos en `/assets/css/` y scripts en `/assets/js/`

## 🧩 Basado en

Este proyecto está adaptado a partir de:

- **[Viaje al Río de la Plata](https://hdlab.space/viaje-al-rio-de-la-plata/)** — un sitio desarrollado por [HDLab-CONICET](https://github.com/hdlabconicet/viaje-al-rio-de-la-plata), que combina transformaciones XSLT, mapas Leaflet y Jekyll para crear narrativas digitales.
- **[Leaflet Storymaps with Google Sheets](https://github.com/HandsOnDataViz/leaflet-storymaps-with-google-sheets)** — una plantilla para mapeo narrativo creada por HandsOnDataViz.

## 📜 Licencia

Este sitio y su código fuente están disponibles bajo la **[Licencia Creative Commons Atribución/Reconocimiento -NoComercial 4.0 Internacional (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)**.  
Podés reutilizar y adaptar el contenido siempre que se reconozca adecuadamente la autoría original y no se utilice con fines comerciales.

## ✍️ Autoría

Desarrollado y adaptado por **[Romina De León](https://rominicky.github.io)** con el patrocinio de [LLILAS Benson](https://sites.utexas.edu/llilasbensonds/funding/digital-scholarship-fellowships/).

Este trabajo se enmarca en una línea de investigación orientada a la historia digital y las humanidades digitales, con especial atención a las formas contemporáneas de lectura y representación del pasado. Explora cómo las narrativas digitales, los mapas interactivos y la estructuración de datos históricos en formatos digitales (como XML-TEI) pueden enriquecer la interpretación de fuentes primarias, permitiendo nuevos modos de análisis histórico y acceso público al conocimiento.

---
