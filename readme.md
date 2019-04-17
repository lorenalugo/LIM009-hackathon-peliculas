# Movies & Series HandBook, "Hackathon" de final de _Common Core_, películas

## Índice

* [Acerca de](#acerca-de)
* [Proceso de Diseño](#proceso-de-diseño)
* [Planning](#planning)

***

## Acerca de

Movies $ Series HandBook es una aplicación web que permite descubrir información acerca de títulos, géneros, ratings de películas y series, antiguas y actuales, tan sólo con ingresar parte de su título. Utiliza OMDb, una web API que permite obtener información de las búsquedas a través de títulos, palabras claves o incluso por id de imdb.

## Proceso de Diseño

El proceso se realizó en cuatro etapas: investigación, definición-ideación, prototipado y testeos de usuarios.

La investigación, se realizó mediante una entrevista a usuarios en edades comprendidas entre 15 y 50 años, en las cuales se determinaron las necesidades e intereses de los mismos.

Para la definición-ideación, se definieron las historias de usuarios, con sus definiciones de terminado.

Historias de Usuario

1.- yo como usuario deseo poder buscar una película o serie con solo colocar una palabra

FUNCIONALIDAD:

crear una función que busque las coincidencias de una o varias palabras asociadas a un titulo de película

DOM:

crear una función que muestre en html las coincidencias de la busqueda, integrando las clases de bootstrap

crear un formulario para ingresar la búsqueda

crear un contenedor para mostrar los resultados

TEST:

escribir pruebas unitarias

ejecutar pruebas y corregir los fallos

Definición de Terminado:

El usuario escribe su búsqueda y al hacer click al botón de buscar, aparece un listado de coincidencias, en
forma de grid, con los estilos css acordados.

El código pasa los tests, y se encuentra en el repositorio.

La historia de usuario ha sido testeada con usuarios.

2.- yo como usuario quiero poder ordenar la lista de películas y/o series por rating

FUNCIONALIDAD:

crear una función que ordene las películas por rating

DOM:

Crear botón de ordenado

crear una función que muestre en html los resultados del ordenado integrando las clases establecidas por
bootstrap

TEST:

escribir pruebas unitarias

ejecutar pruebas y corregir los fallos

Definición de Terminado:

El usuario hace click al botón de ordenar y se acomoda el listado de coincidencias, en orden descendente
del rating, manteniendo los estilos css acordados.

El código pasa los tests, y se encuentra en el repositorio.

La historia de usuario ha sido testeada con usuarios.

3.- yo como usuario deseo ver la información de la película o serie seleccionada

FUNCIONALIDAD:

crear una función que busque la información de una película en función de su id

DOM:

crear una función que imprima en html la información de la película seleccionada, integrando las clases de
bootstrap

TEST:

escribir pruebas unitarias

ejecutar pruebas y corregir los fallos

Definición de Terminado:

El usuario hace click sobre la imagen de la película y aparece la vista del detalle, con la información acordada (título, duración, género, actores, sinopsis, rating), manteniendo los estilos css acordados.

El código pasa los tests, y se encuentra en el repositorio.

La historia de usuario ha sido testeada con usuarios.

Posteriormente, se realizó el prototipado de baja fidelidad, el cual fue testeado con usuarios, de las edades antes mencionadas.

Y finalmente el prototipo de alta fidelidad.

https://www.figma.com/proto/W263NumHRDhWaXaNiTctL6jr/HACK_Peli?node-id=1%3A2&scaling=scale-down&redirected=1

## planniNg

|--------------------------------------------------------------------------------------------------|
|                                                       |              INTEGRANTES                 |
|                    ACTIVIDADES                        |------------------------------------------|
|                                                       |  Lorena (FE) | Leslie (FE) | Maria (UX)  |
|-------------------------------------------------------|- ------------|-------------|-------------|
|  1. Definición del producto                           |       x      |      x      |      x      |
|  2. Entrevistas a usuarios                            |              |             |      x      |
|  3. Definición de Historias de usuarios               |       x      |      x      |      x      |
|  4. Diseño del Prototipo de baja fidelidad            |       x      |      x      |      x      |
|  5. Flujo de usuarios                                 |       x      |      x      |      x      |
|  6. Diseño del Prototipo de alta fidelidad en Figma   |              |             |      x      |
|  7. Testeos de Usabilidad                             |              |             |      x      |
|--------------------------------------------------------------------------------------------------|
|  8. Implementacion de interfaz de usuario             |                                          |
|    - Creación del ambiente de desarrollo              |        x     |             |             |
|    - Creación de la logica y componentes              |        x     |      x      |             |
|    - Maquetación de la interfaz  en HTML              |        x     |      x      |             |
|    - Personalización de los estilos CSS con Boostrap  |        x     |      x      |             |
|--------------------------------------------------------------------------------------------------|


