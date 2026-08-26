---
layout: page
title: Análisis textual automatizado
permalink: /voyant/
type: extras
description: Estadísticas textuales y visualizaciones realizadas con Voyant Tools
icon: bar-chart
---

En esta sección encuentras una exploración del contenido de _Comentarios_ con [Voyant Tools](https://voyant-tools.org/), herramienta de lectura distante y análisis estadístico de textos digitales.

Las siguientes secciones presentan cuadros interactivos. En cada panel, deslice el cursor sobre la esquina derecha de la barra superior para mostrar las opciones. El ícono <i class="fa-solid fa-question" style="color:#157fcc;"></i> permite acceder a una explicación de la herramienta usada en cada panel. El ícono <i class="fa-solid fa-toggle-on" style="color:#157fcc;"></i> permite modificar las opciones de la herramienta.

## Nube de palabras

Este primer cuadro presenta las palabras más frecuentes del texto de Cabeza de Vaca, puedes deslizar el cursor sobre las palabras para ver la frecuencia en el texto.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Cirrus/?stopList=keywords-b1dda78594e7ff15920f93d49f0e4831&whiteList=&corpus=5f9462d0861c8ebc03958fb07ced6fc6'></iframe>

Deslice la barra de términos para aumentar o disminuir la cantidad de palabras en la nube.

## Tendencias

Este fragmento muestra una visualización con la representación de las frecuencias de los términos del _Comentarios_. Se genera una serie, indicada con diferentes colores para cada una, según la palabra que representa.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Trends/?stopList=keywords-b1dda78594e7ff15920f93d49f0e4831&query=indios&query=tierra&query=gobernador&query=gente&query=r%C3%ADo&mode=document&corpus=5f9462d0861c8ebc03958fb07ced6fc6'></iframe>

## Contextos

En este cuadro se presenta el *contexto enunciativo* de las palabras más frecuentes del texto. Se puede modificar por frecuencia ascendente o descendente.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Contexts/?stopList=keywords-b1dda78594e7ff15920f93d49f0e4831&query=gente*&query=gobernador*&query=india*&query=indio*&query=r%C3%AD*&query=tierr*&corpus=5f9462d0861c8ebc03958fb07ced6fc6'></iframe>

Modificá el término a consultar desde el menú inferior izquierdo.

## Grafo de colocaciones

Deslizá el cursor sobre las palabras de este grafo de colocaciones para consultar la frecuencia de cada par de términos.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Links/?stopList=keywords-b1dda78594e7ff15920f93d49f0e4831&query=gobernador&query=gente&query=cap%C3%ADtulo&query=indios&query=tierra&query=envi%C3%B3&query=guaran%C3%ADes&query=cristianos&query=naturales&query=adentro&query=r%C3%ADo&context=9&corpus=5f9462d0861c8ebc03958fb07ced6fc6'></iframe>

## DreamScape

Este tipo de visualización de Voyant-tools genera una versión preliminar de representación geoespacial de _Comentarios_ siguiendo patrones de recorridos según personajes, etc.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/DreamScape/?stopList=keywords-b1dda78594e7ff15920f93d49f0e4831&corpus=5f9462d0861c8ebc03958fb07ced6fc6'></iframe>

<div class="py-4 mt-4"><p>Visitá <a href="https://service.sadilar.org/voyant/?stopList=keywords-b1dda78594e7ff15920f93d49f0e4831&panels=links%2Creader%2Ctrends%2Csummary%2Ccontexts&corpus=5f9462d0861c8ebc03958fb07ced6fc6" target="_blank">este link</a> para descubrir los <i>Comentarios</i> seleccionando otras herramientas ofrecidas por Voyant Tools: <a href="https://service.sadilar.org/voyant/tool/Bubbles/?stopList=keywords-b1dda78594e7ff15920f93d49f0e4831&corpus=5f9462d0861c8ebc03958fb07ced6fc6" target="_blank">burbujas</a>, <a href="https://service.sadilar.org/voyant/tool/ScatterPlot/?stopList=keywords-b1dda78594e7ff15920f93d49f0e4831&analysis=tsne&label=terms&view=bubbles&corpus=5f9462d0861c8ebc03958fb07ced6fc6" target="_blank">Scatter Plot</a>, y muchas más.</p></div>
