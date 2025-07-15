---
layout: page
title: Recursos
permalink: /recursos/
type: extras
---


<!-- Recursos -->
<div class="container mx-auto px-2">
  <div class="py-1 mb-0 prose">
   <h2 class="izquierda">
      <svg class="bi bi-tag" width="0.8em" height="0.8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M.5 2A1.5 1.5 0 0 1 2 .5h4.586a1.5 1.5 0 0 1 1.06.44l7 7a1.5 1.5 0 0 1 0 2.12l-4.585 4.586a1.5 1.5 0 0 1-2.122 0l-7-7A1.5 1.5 0 0 1 .5 6.586V2zM2 1.5a.5.5 0 0 0-.5.5v4.586a.5.5 0 0 0 .146.353l7 7a.5.5 0 0 0 .708 0l4.585-4.585a.5.5 0 0 0 0-.708l-7-7a.5.5 0 0 0-.353-.146H2z"/>
        <path fill-rule="evenodd" d="M2.5 4.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg> <a class="no-underline" title="Análisis textual estadístico" href="https://mybinder.org/v2/gh/rominicky/comentarios-cabeza-de-vaca/daeaf235489abcf42d0ba9addfd51e1d4c630e50?urlpath=lab%2Ftree%2Fassets%2Fnotebook%2Fexploracion_textual.ipynb" target="_blank">Notebook</a>
  </h2>
  <a class="h3 lh-condensed" href="" target="_blank"><p>Exploración y análisis cuantitativo de la obra de Álvar Núñez Cabeza de Vaca</p></a></div>

  {% for post in site.recursos %}
    {% include post_block.html %}
  {% endfor %}

</div><!-- End Recursos -->
