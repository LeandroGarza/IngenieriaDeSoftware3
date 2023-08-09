Ejercicios de desarrollo

1_ Ejecutamos el comando "docker version"
![Alt text](1.png)

2_ Nos familiarizamos con docker hub
![Alt text](2.png)

3_ Bajamos una imagen de dockerhub con el comando "docker pull busybox"
![Alt text](3.png)

Luego vemos todas las imagenes que tenemos y sus respectivos tamaños con "docker images"
![Alt text](4.png)

4_ Ejecutando contenedores
![Alt text](5.png)

5_ Ejecutando en modo interactivo
![Alt text](6.png)

6_ Borrando contenedores
![Alt text](7.png)

7_ Construir una imagen
creamos la imgen
![Alt text](8.png)

analizamos el dockerfile
![Alt text](9.png)

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base: Esta línea establece la imagen base a utilizar para la construcción. En este caso, se basa en la imagen mcr.microsoft.com/dotnet/aspnet:7.0, que proporciona el entorno de ejecución ASP.NET Core.

WORKDIR /app: Establece el directorio de trabajo dentro del contenedor en /app.

EXPOSE 80, EXPOSE 443, EXPOSE 5254: Expone los puertos 80, 443 y 5254 del contenedor. Estos puertos son típicamente utilizados para el tráfico HTTP y HTTPS en aplicaciones web.

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build: Define una nueva etapa de construcción basada en la imagen mcr.microsoft.com/dotnet/sdk:7.0. Esta etapa se utilizará para compilar la aplicación.

WORKDIR /src: Establece el directorio de trabajo dentro del contenedor en /src.

COPY ["SimpleWebAPI/SimpleWebAPI.csproj", "SimpleWebAPI/"]: Copia el archivo de proyecto .csproj de la aplicación al directorio de trabajo en el contenedor.

RUN dotnet restore "SimpleWebAPI/SimpleWebAPI.csproj": Ejecuta el comando dotnet restore para restaurar las dependencias del proyecto.

COPY . .: Copia todos los archivos del contexto de construcción (incluyendo el código fuente) al directorio de trabajo en el contenedor.

WORKDIR "/src/SimpleWebAPI": Cambia el directorio de trabajo al subdirectorio de la aplicación.

RUN dotnet build "SimpleWebAPI.csproj" -c Release -o /app/build: Compila la aplicación en modo Release y guarda los resultados en el directorio /app/build.

FROM build AS publish: Define una nueva etapa de construcción basada en la etapa build. Esta etapa se utilizará para publicar la aplicación.

RUN dotnet publish "SimpleWebAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false: Publica la aplicación en modo Release y guarda los resultados en el directorio /app/publish.

FROM base AS final: Define una nueva etapa final basada en la etapa base. Esta etapa se utilizará para la imagen final.

WORKDIR /app: Cambia el directorio de trabajo al directorio /app.

COPY --from=publish /app/publish .: Copia los archivos publicados de la etapa publish al directorio de trabajo en el contenedor.

ENTRYPOINT ["dotnet", "SimpleWebAPI.dll"]: Establece el punto de entrada para ejecutar la aplicación cuando se inicie el contenedor.

Vemos la imagen nueva creada y luego creamos su contenedor
![Alt text](10.png)

La subimos a docker hub
![Alt text](11.png)

8_ Publicando puertos