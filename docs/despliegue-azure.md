# Guía de Despliegue — Azure Static Web Apps + GitHub Actions

Este documento describe el proceso completo para configurar el repositorio en GitHub y desplegar el sitio en Azure Static Web Apps con CI/CD automático.

---

## Requisitos previos

| Herramienta | Versión mínima | Instalación |
|-------------|---------------|-------------|
| Node.js | 18+ | https://nodejs.org |
| Git | cualquiera | https://git-scm.com |
| GitHub CLI (`gh`) | cualquiera | https://cli.github.com |
| Azure CLI (`az`) | cualquiera | `winget install Microsoft.AzureCLI` |

---

## Parte 1 — Configuración del repositorio en GitHub

### 1.1 Autenticarse en GitHub CLI

Si hay una variable de entorno `GITHUB_TOKEN` activa, primero elimínala:

```powershell
# PowerShell
Remove-Item Env:GITHUB_TOKEN
```

Luego inicia sesión:

```bash
gh auth login
```

Selecciona:
- **GitHub.com**
- **HTTPS**
- **Login with a web browser**

### 1.2 Inicializar el repositorio Git local

Desde la carpeta raíz del proyecto (`site/`):

```bash
git init
git add .
git commit -m "Initial commit: La Amobladora landing page"
git branch -m master main
```

### 1.3 Crear el repositorio en GitHub y hacer push

```bash
unset GITHUB_TOKEN
gh repo create jmendega/laamobladora-site --public --source=. --remote=origin --push
```

Esto crea el repositorio en `https://github.com/jmendega/laamobladora-site`, configura el remote `origin` y sube el código a la rama `main`.

---

## Parte 2 — Configuración del recurso en Azure

### 2.1 Iniciar sesión en Azure

```bash
az login
```

Se abre el navegador. Autentícate con tu cuenta de Azure.

Si tienes múltiples suscripciones, activa la correcta:

```bash
az account set --subscription "<nombre o ID de la suscripción>"
```

### 2.2 Crear el recurso Azure Static Web App

```bash
az staticwebapp create \
  --name amobladora-prod-landingpage \
  --resource-group amobladora-prod-rg \
  --location eastus2
```

> El recurso queda en el grupo `amobladora-prod-rg` (Free tier, sin costo).

### 2.3 Obtener el token de despliegue

```bash
az staticwebapp secrets list \
  --name amobladora-prod-landingpage \
  --resource-group amobladora-prod-rg \
  --query "properties.apiKey" -o tsv
```

Copia el token que devuelve este comando.

### 2.4 Agregar el token como secreto en GitHub

```bash
unset GITHUB_TOKEN
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN \
  --repo jmendega/laamobladora-site \
  --body "<token copiado en el paso anterior>"
```

Puedes verificar que el secreto existe en:
`https://github.com/jmendega/laamobladora-site/settings/secrets/actions`

---

## Parte 3 — Pipeline de GitHub Actions

El archivo `.github/workflows/azure-deploy.yml` ya está incluido en el repositorio. Su contenido es:

```yaml
name: Deploy to Azure Static Web Apps

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build for Azure
        run: npm run build:azure

      - name: Deploy to Azure Static Web Apps
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: upload
          app_location: "out"
          skip_app_build: true
```

**Cómo funciona:**

1. Se dispara automáticamente en cada push a `main`
2. Instala dependencias con `npm ci`
3. Genera el build estático con `npm run build:azure` (crea la carpeta `out/`)
4. Sube el contenido de `out/` a Azure Static Web Apps

---

## Parte 4 — Primer despliegue

Después de completar las partes 1, 2 y 3, el primer deploy ya se habrá ejecutado automáticamente al hacer push del código. Para verificarlo:

```bash
unset GITHUB_TOKEN
gh run list --repo jmendega/laamobladora-site --limit 5
```

Espera a que el estado cambie de `in_progress` a `completed`.

El sitio queda disponible en:
```
https://gray-flower-0b5d95d0f.1.azurestaticapps.net
```

> La URL exacta aparece en el campo `defaultHostname` al crear el recurso, o en el Portal de Azure → amobladora-prod-landingpage → Overview.

---

## Parte 5 — Flujo de trabajo diario

Para actualizar el sitio después de hacer cambios al código:

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```

GitHub Actions se dispara automáticamente. En ~2 minutos el sitio está actualizado en Azure.

Para ver el estado del deploy en tiempo real:

```bash
unset GITHUB_TOKEN
gh run list --repo jmendega/laamobladora-site --limit 3
```

---

## Ambientes disponibles

| Ambiente | Comando de inicio | URL |
|----------|------------------|-----|
| Desarrollo local | `npm run dev` | http://localhost:3000 |
| Docker Desktop | `docker run -p 8080:8080 laamobladora` | http://localhost:8080 |
| Producción (Azure) | push a `main` → automático | https://gray-flower-0b5d95d0f.1.azurestaticapps.net |

### Scripts de build por ambiente

```bash
# Build para Docker (output: standalone)
npm run build:docker

# Build para Azure (output: export → genera out/)
npm run build:azure
```

---

## Solución de problemas frecuentes

### Error: `Resource not accessible by personal access token`

La variable `GITHUB_TOKEN` del entorno está bloqueando el acceso. Solución:

```powershell
# PowerShell
Remove-Item Env:GITHUB_TOKEN
```

```bash
# Bash / Git Bash
unset GITHUB_TOKEN
```

### Error: `Failed to find a default file in the app artifacts folder`

El action de Azure no encontró `index.html`. Verifica que `app_location` en el workflow sea `"out"` y no `"/"`.

### El workflow falla con `deployment_token was not provided`

El secreto `AZURE_STATIC_WEB_APPS_API_TOKEN` no está configurado o no es accesible. Verifica en:
`https://github.com/jmendega/laamobladora-site/settings/secrets/actions`

Si no aparece, repite el paso 2.4.

### Ver logs detallados de un deploy

```bash
unset GITHUB_TOKEN
gh run view <run-id> --repo jmendega/laamobladora-site --log-failed
```

Obtén el `<run-id>` con `gh run list`.
