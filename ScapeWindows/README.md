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
            - npm run dev (levantamos un servidor local)

   - Desplegar react en github pages (para tener nuestro proyect en la wed )
     & npm install gh-pages --save-dev (creo que este se hace al final y no ahora pero no 
     importa por que me ha funcionado igual)
     & en package.json despues de dev y antes del build añadir:
       - "predeploy": "npm run build",
       - "deploy": "gh-pages -d dist"
      & en vite.config.js añadir:
        "base": "/scapewindows.github.io"
   - En la terminal ejecutar los siguientes cmd
     & npm install gh-pages --save-dev (para que reconozca el cmd gh-pages)
     & npm run deploy (para desplegar la pagina)
       - luego ir al repo en github 
         + seleccionar repo correspondiente y en default branch cambiar 
           a gh-pages y guardar.
         + luego seleccionar en el panel ízquierdo la section de Pages y cambiar el branch
           de main a gh-pages y guardar cambios.
           - esperar unos minutos y seleccionar la url en la parte superior 
             de la pagina y si ya estaba con main al cambiar a gh-pages se 
             actualiza el url.

  - Para pruebas tecnicas usar eslint y (standardjs.com)
    - prevenir errores y fallos no deseados
    - eslint es una extension de vs
    - standardjs.com hay que &npm install standard -D
    - y luego en el package.json configurar lo siguiente
    -  "eslintConfig": {
    "extends": "./node_modules/standard/.esLintrc.json"
  }. al final del todo
    
