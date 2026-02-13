# Instrucciones de Deployment

## Problema con bun.lockb

Si Cloudflare Pages está usando `bun install --frozen-lockfile` y falla, sigue estos pasos:

### 1. Eliminar bun.lockb del repositorio remoto

Ejecuta estos comandos en tu terminal:

```bash
# Eliminar bun.lockb del repositorio (si existe)
git rm --cached bun.lockb

# Hacer commit de todos los cambios
git add .
git commit -m "Fix: Remove bun.lockb and force npm usage"

# Push al repositorio
git push origin main
```

### 2. Configurar Cloudflare Pages

En el dashboard de Cloudflare Pages:

- **Build command**: `npm install && npm run build`
- **Build output directory**: `dist`
- **Node version**: `22.16.0` (o la versión que prefieras)
- **Package manager**: Forzar `npm` (no auto-detect)

### 3. Alternativa: Si quieres usar bun

Si prefieres usar bun, instálalo localmente y ejecuta:

```bash
bun install
git add bun.lockb
git commit -m "Update bun.lockb"
git push
```

Pero asegúrate de que el lockfile esté actualizado antes de hacer push.
