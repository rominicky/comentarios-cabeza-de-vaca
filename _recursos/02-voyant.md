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

<iframe class="py-3" src='https://voyant-tools.org/tool/Cirrus/?stopList=keywords-b90d5a13984f76bf6a83bd1d56e11cfc&corpus=8b0ae0513da342db4576238feb0aff28'></iframe>

Deslice la barra de términos para aumentar o disminuir la cantidad de palabras en la nube.

## Tendencias

Este fragmento muestra una visualización con la representación de las frecuencias de los términos del _Comentarios_. Se genera una serie, indicada con diferentes colores para cada una, según la palabra que representa.

<iframe class="py-3" src='https://voyant-tools.org/tool/Trends/?stopList=keywords-b90d5a13984f76bf6a83bd1d56e11cfc&query=indios&query=tierra&query=gobernador&query=gente&query=r%C3%ADo&mode=document&corpus=8b0ae0513da342db4576238feb0aff28'></iframe>

## Contextos

En este cuadro se presenta el *contexto enunciativo* de las palabras más frecuentes del texto. Se puede modificar por frecuencia ascendente o descendente.

<iframe class="py-3" src='https://voyant-tools.org/tool/Contexts/?stopList=keywords-b90d5a13984f76bf6a83bd1d56e11cfc&query=irala*&corpus=8b0ae0513da342db4576238feb0aff28'></iframe>

Modificá el término a consultar desde el menú inferior izquierdo.

## Grafo de colocaciones

Deslizá el cursor sobre las palabras de este grafo de colocaciones para consultar la frecuencia de cada par de términos.

<iframe class="py-3" src='https://voyant-tools.org/tool/CollocatesGraph/?stopList=keywords-b90d5a13984f76bf6a83bd1d56e11cfc&query=indios&query=tierra&query=gobernador&corpus=8b0ae0513da342db4576238feb0aff28'></iframe>

## DreamScape

Este tipo de visualización de Voyant-tools genera una versión preliminar de representación geoespacial de _Comentarios_ siguiendo patrones de recorridos según personajes, etc.

<iframe class="py-3" src='https://voyant-tools.org/tool/DreamScape/?stopList=keywords-b90d5a13984f76bf6a83bd1d56e11cfc&view=loom&corpus=8b0ae0513da342db4576238feb0aff28'></iframe>

<div class="py-4 mt-4"><p>Visitá <a href="https://voyant-tools.org/?stopList=keywords-b90d5a13984f76bf6a83bd1d56e11cfc&panels=collocatesgraph%2Creader%2Ctrends%2Csummary%2Ccontexts&corpus=8b0ae0513da342db4576238feb0aff28" target="_blank">este link</a> para descubrir los <i>Comentarios</i> seleccionando otras herramientas ofrecidas por Voyant Tools: <a href="https://voyant-tools.org/tool/Bubbles/?stopList=keywords-b90d5a13984f76bf6a83bd1d56e11cfc&corpus=8b0ae0513da342db4576238feb0aff28" target="_blank">burbujas</a>, <a href="https://voyant-tools.org/tool/ScatterPlot/?stopList=keywords-b90d5a13984f76bf6a83bd1d56e11cfc&analysis=pca&limit=75&view=rezoviz&corpus=8b0ae0513da342db4576238feb0aff28" target="_blank">Scatter Plot</a>, y muchas más.</p></div>
