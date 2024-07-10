# component-library-carlos

> Component library for nuclio 

[![NPM](https://img.shields.io/npm/v/component-library-carlos.svg)](https://www.npmjs.com/package/component-library-carlos) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install nuclio-component-library-2024 
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'nuclio-component-library-2024'
import 'nuclio-component-library-2024 /dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```


# Mi Componente Library

Una biblioteca de componentes de React creada con Vite, configurada con Storybook y lista para ser publicada en npm.

## Requisitos Previos

- Node.js (>=14.x)
- npm (>=6.x)

## Configuración Inicial

### Crear el Proyecto con Vite

1. Crea un nuevo proyecto de Vite:
    ```bash
    npm create vite@latest mi-proyecto --template react
    cd mi-proyecto
    ```

2. Instala las dependencias necesarias:
    ```bash
    npm install
    ```

### Añadir y Configurar Storybook

3. Añade Storybook a tu proyecto:
    ```bash
    npx sb init --builder vite
    ```

4. Crea tus componentes y sus historias en la carpeta `src/components`.

5. Inicia Storybook:
    ```bash
    npm run storybook
    ```

### Publicar la Biblioteca en npm

6. Organiza la estructura del proyecto y exporta los componentes en `src/index.jsx`.

7. Instala Rollup y las dependencias necesarias para la construcción:
    ```bash
    npm install --save-dev rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-babel @rollup/plugin-terser rollup-plugin-peer-deps-external rollup-plugin-postcss
    ```

8. Crea el archivo de configuración de Rollup (`rollup.config.js`).

9. Configura el archivo `package.json` para la publicación:
    ```json
    {
      "name": "mi-componente-library",
      "version": "1.0.0",
      "description": "Una biblioteca de componentes de React",
      "main": "dist/index.js",
      "scripts": {
        "build": "rollup -c"
      },
      "keywords": [
        "react",
        "component",
        "library"
      ],
      "author": "Tu Nombre <tu.email@example.com>",
      "license": "MIT",
      "devDependencies": {
        "@babel/core": "^7.15.0",
        "@babel/preset-env": "^7.15.0",
        "@babel/preset-react": "^7.14.5",
        "@rollup/plugin-babel": "^5.3.0",
        "@rollup/plugin-commonjs": "^21.0.1",
        "@rollup/plugin-node-resolve": "^13.0.4",
        "rollup": "^2.56.3",
        "rollup-plugin-peer-deps-external": "^2.2.4",
        "rollup-plugin-postcss": "^4.0.0",
        "rollup-plugin-terser": "^7.0.2"
      },
      "peerDependencies": {
        "react": "^17.0.2",
        "react-dom": "^17.0.2"
      },
      "files": [
        "dist"
      ]
    }
    ```

10. Compila la biblioteca:
    ```bash
    npm run build
    ```

11. Inicia sesión en npm:
    ```bash
    npm login
    ```

12. Publica tu paquete:
    ```bash
    npm publish --access public
    ```

### Resumen

Este archivo `README.md` proporciona los pasos esenciales para configurar Storybook en un proyecto de Vite y publicar una biblioteca de componentes en npm. Para detalles específicos sobre el código de los componentes, consulta los archivos dentro del repositorio.


## License

MIT © [carlosarenasf](https://github.com/carlosarenasf)