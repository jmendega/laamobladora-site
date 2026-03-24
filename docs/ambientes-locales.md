# Guía de Ambientes Locales — Desarrollo y Docker Desktop

Este documento describe cómo iniciar el sitio en los dos ambientes locales disponibles: desarrollo con hot-reload y contenedor Docker Desktop.

---

## Requisitos previos

| Herramienta | Versión mínima | Instalación |
|-------------|---------------|-------------|
| Node.js | 18+ | https://nodejs.org |
| npm | incluido con Node.js | — |
| Docker Desktop | cualquiera | https://www.docker.com/products/docker-desktop |

---

## Ambiente 1 — Desarrollo local (`localhost:3000`)

Ideal para trabajar en el código con recarga automática al guardar cambios.

### Instalar dependencias (solo la primera vez)

Desde la carpeta raíz del proyecto (`site/`):

```bash
npm install
```

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

El sitio queda disponible en:
```
http://localhost:3000
```

Cualquier cambio que hagas en los archivos se refleja en el navegador de forma inmediata sin necesidad de reiniciar.

### Detener el servidor

Presiona `Ctrl + C` en la terminal donde corre el servidor.

### Solución de problemas

**El puerto 3000 ya está en uso:**

```bash
# Windows — cerrar todos los procesos Node.js
taskkill /F /IM node.exe

# Luego volver a iniciar
npm run dev
```

**Dependencias desactualizadas o faltantes:**

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## Ambiente 2 — Docker Desktop (`localhost:8080`)

Simula el ambiente de producción corriendo el sitio dentro de un contenedor. Útil para verificar el comportamiento antes de desplegar a Azure.

> Docker Desktop debe estar abierto y corriendo antes de ejecutar estos comandos.

### Construir la imagen Docker

Desde la carpeta raíz del proyecto (`site/`):

```bash
docker build -t laamobladora .
```

Este comando:
1. Instala dependencias dentro del contenedor
2. Genera el build de producción (`output: standalone`)
3. Crea una imagen optimizada llamada `laamobladora`

La primera vez toma varios minutos. Las siguientes veces es más rápido gracias al caché de capas.

### Iniciar el contenedor

```bash
docker run -d -p 8080:8080 --name laamobladora laamobladora
```

El sitio queda disponible en:
```
http://localhost:8080
```

| Parámetro | Descripción |
|-----------|-------------|
| `-d` | Corre el contenedor en segundo plano |
| `-p 8080:8080` | Mapea el puerto 8080 del contenedor al puerto 8080 local |
| `--name laamobladora` | Nombre del contenedor para gestionarlo fácilmente |

### Verificar que el contenedor está corriendo

```bash
docker ps
```

Debes ver el contenedor `laamobladora` en la lista con estado `Up`.

### Detener el contenedor

```bash
docker stop laamobladora
```

### Eliminar el contenedor (para recrearlo)

```bash
docker rm laamobladora
```

### Detener y eliminar en un solo comando

```bash
docker stop laamobladora && docker rm laamobladora
```

### Ver los logs del contenedor

```bash
docker logs laamobladora
```

---

## Flujo de trabajo recomendado

```
Desarrollo diario
      ↓
npm run dev → editar código → ver cambios en http://localhost:3000
      ↓
Verificación antes de subir a producción
      ↓
docker build -t laamobladora . → docker run -p 8080:8080 laamobladora
      ↓
Revisar http://localhost:8080 — todo se ve bien
      ↓
git add . && git commit -m "..." && git push origin main
      ↓
GitHub Actions despliega automáticamente a Azure (~2 min)
```

---

## Reconstruir la imagen Docker después de cambios

Si hiciste cambios al código y quieres probarlos en Docker, debes reconstruir la imagen:

```bash
# Detener y eliminar el contenedor actual
docker stop laamobladora && docker rm laamobladora

# Reconstruir la imagen con los cambios
docker build -t laamobladora .

# Iniciar el nuevo contenedor
docker run -d -p 8080:8080 --name laamobladora laamobladora
```

---

## Diferencias entre ambientes

| Característica | Desarrollo local | Docker Desktop | Azure (producción) |
|----------------|-----------------|---------------|--------------------|
| Puerto | 3000 | 8080 | 443 (HTTPS) |
| Hot-reload | Sí | No | No |
| Build necesario | No | Sí | Sí (automático) |
| Tipo de output | N/A | `standalone` | `export` (estático) |
| Tiempo de inicio | ~1 seg | ~5 seg (si ya existe imagen) | ~2 min (CI/CD) |
| Uso recomendado | Desarrollo | Pruebas pre-deploy | Producción |
