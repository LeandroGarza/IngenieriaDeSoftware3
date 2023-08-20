Realizacion de la parte de desarrollo del TP6 "construccion de imagenes de docker".

## 1 conceptos de dockerfile

FROM
se utiliza para especificar la imagen base desde la cual se va a construir la nueva imagen. Es la primera instrucción que se coloca en un Dockerfile. Define el punto de partida para la construcción de la imagen y generalmente es una imagen oficial de Docker Hub o una imagen personalizada.

RUN
se utiliza para ejecutar comandos en una nueva capa sobre la imagen actual y luego guardarla como una nueva capa en la imagen. Se utiliza para instalar paquetes, configurar el entorno y realizar acciones durante la construcción de la imagen.

ADD y COPY
Ambas instrucciones se utilizan para copiar archivos y directorios en la imagen, pero con algunas diferencias clave:

ADD tiene algunas características adicionales, como la capacidad de extraer archivos comprimidos automáticamente y copiar archivos desde URLs. Es más versátil pero puede ser menos predecible.
COPY simplemente copia archivos y directorios desde el contexto de construcción al sistema de archivos de la imagen. Es más predecible y se recomienda para la mayoría de los casos.

EXPOSE
se utiliza para especificar los puertos en los que el contenedor va a escuchar durante la ejecución. No abre puertos en el host o habilita la comunicación directa, solo documenta la intención del contenedor.

CMD
se utiliza para proporcionar un comando o un conjunto de comandos predeterminados que se ejecutarán cuando se inicie el contenedor. Puede ser sobrescrito por comandos proporcionados al ejecutar el contenedor, pero solo el último comando proporcionado se ejecutará.

ENTRYPOINT
se utiliza para configurar el comando que se ejecutará cuando se inicie el contenedor, y cualquier argumento proporcionado al ejecutar el contenedor se pasa como argumentos al comando ENTRYPOINT. A diferencia de CMD, los argumentos proporcionados no sobrescriben el comando principal, sino que se pasan a él.

## 2 generar imagen de docker
una vez que clonamos el repositorio y entramos a la carpeta, tiramos el comando como vemos en imagen
![Alt text](1.png)

luego agregamos el codigo proporcionado al archivo llamado dockerfie y procedemos a tirar el siguiente comando, el cual como nunca funcionaba, trate con otro repositorio con el comando 

docker pull adoptopenjdk/openjdk8:alpine

y tampoco pude


## 3 dockerfile multi etapas

## 4 python flask

una vez que tenemos la carpeta, la cual adjuntamos en este tp tambien, tiramos el comando docker-compose up -d una vez que este prendido docker y obtenemos lo siguiente
![Alt text](2.png)
![Alt text](3.png)

EXPLICAR QUE SUCEDIO ME FALTA

El campo build.context en un archivo docker-compose.yml se utiliza para especificar el contexto de construcción al crear una imagen de Docker para un servicio dentro de un archivo docker-compose.yml. Es el conjunto de archivos y directorios que se enviarán al daemon de Docker para construir la imagen del contenedor e incluye todos los archivos en el directorio especificado y sus subdirectorios.

En el archivo docker-compose.yml, el servicio app tiene el campo build con context: ./, lo que significa que el contexto de construcción se establece en el directorio actual (donde se encuentra el archivo docker-compose.yml). Todos los archivos y subdirectorios en ese directorio se enviarán al demonio de Docker para la construcción de la imagen del contenedor app.

## 5 imagen para aplicacion web en Nodejs

## 6 publicar la imagen en docker hub