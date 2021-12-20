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

## Conexión con API de E-Commerce

Para conectar con la API de E-Commerce, en el archivo index.html modificar la siguiente línea:
```html
<script>
  const VUE_APP_PUBLIC_URL_API = 'XXXXXXX';
</script>
```

## Registro de páginas y componentes Vue

`src/pages` -> Lugar donde se encuentran las páginas. Estas páginas deben estar en .vue. En /examples/ se encuentra el ejemplo de una página vacía.

`src/components` -> Lugar donde se encuentran los componentes. Estos componentes deben estar en .vue. En /examples/ se encuentra el ejemplo de un componente vacío.

En `src/main.js` se deben realizar las siguientes tareas según se necesite.

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

### 1.1
- Vuex
- Vee Validate (con Zod para schema)
- Autenticación con JWT

### 1.0
- Vue 3
- Bootstrap 5
- Bootstrap icons como fuentes
- Axios
- Vue3-sfc-loader

## Copyright y licencia
Código lanzando con la licencia [MIT License](https://github.com/renesilva/es-boilerplate-html/blob/master/LICENSE).