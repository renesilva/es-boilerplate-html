## Eressea Solutions Bootstrap/Vue Boilerplate

Proyecto base para codificar HTML con Bootstrap 5 y Vue 3.

Vue.js es llamado como recurso.

## Instalación e inicio

Programas necesarios
- Instalar [npm](https://www.npmjs.com/)
- Instalar Gulp `npm install -g gulp` 

Para inicializar el programa se debe correr los siguientes pasos:
1. Correr `npm install` para instalar las dependencias de Node.js
2. Correr `gulp` para iniciar el proyecto.

## Registro de páginas y componentes Vue

`src/pages` -> Lugar donde se encuentran las páginas. Estas páginas deben estar en .vue. En /examples/ se encuentra el ejemplo de una página vacía.

`src/components` -> Lugar donde se encuentran los componentes. Estos componentes deben estar en .vue. En /examples/ se encuentra el ejemplo de un componente vacío.

En `index.html` se deben realizar las siguientes tareas según se necesite.

### 1. Registro de Componentes
```js
const NombreComponenteComponent = Vue.defineAsyncComponent(() =>loadModule('./components/NombreComponente.vue', options),);
```
### 2. Registro de Páginas
```js
const NombrePaginaPage = Vue.defineAsyncComponent(() => loadModule('./pages/Pagina.vue', options));
```
### 3. Registro de Rutas para páginas
  ```js
{ path: '/url', component: NombrePaginaPage }
```
### 4. Registro de Componentes
```js
app.component('nombre-componente-component', NombreComponenteComponent);
```
## Releases

### 1.0
- Vue 3
- Bootstrap 5
- Bootstrap icons como fuentes
- Axios

## Archivos de /src

```text
src/
┣ assets/
┃ ┣ images/
┃ ┣ js/
┃ ┃ ┗ main.js
┃ ┗ scss/
┃   ┣ styles/
┃ ┃ ┃ ┣ style.scss
┃ ┃ ┃ ┣ typography.scss
┃ ┃ ┃ ┗ variables.scss
┃   ┗ stylesheet.scss
┣ components/
┃ ┗ Boton.vue
┣ pages/
┃ ┣ AcercaDe.vue
┃ ┗ Home.vue
┣ static/
┣ vendor/
┃ ┣ css/
┃ ┃ ┗ .gitkeep
┃ ┗ js/
┃   ┣ axios.js
┃   ┣ bootstrap.bundle.js
┃   ┣ options.js
┃   ┣ vue-router.global.js
┃   ┣ vue.global.prod.js
┃   ┣ vue3-sfc-loader.js
┣ App.vue
┗ index.html
```

## Copyright y licencia
Código lanzando con la licencia [MIT License](https://github.com/renesilva/es-boilerplate-html/blob/master/LICENSE).