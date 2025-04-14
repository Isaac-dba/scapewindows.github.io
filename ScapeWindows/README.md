# scape-windows
new proyect
  - Crear repo en github y desplegar en gitpages.
  - Desplegar react en el repo.
     * Abrir terminal en carpeta proyect(scape-windows).
     * lista de comandos que me funciono:
        & npm install
        & npm create vite@latest
           -project name:
           -package.json
           -select a framework:
           -select a variant:
           Done. Now run:
            - cd ScapeWindows 
            - npm install
            - npm run dev

   - Desplegar react en github pages
     & npm install gh-pages --save-dev
     & en package.json despues de dev y antes del build añadir:
       - "predeploy": "npm run build",
       - "deploy": "gh-pages -d dist"
      & en vite.config.js añadir:
        "base": "/scapewindows.github.io"

