import store from './store/index.js';
// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor.js';

// ***********************************
// 1. Registro de Componentes
// ***********************************
const LoaderComponent = Vue.defineAsyncComponent(() =>
    loadModule('./components/Loader.vue', options),
);
// ***********************************


// ***********************************
// 2. Registro de Páginas
// ***********************************
const HomePage = Vue.defineAsyncComponent(() => loadModule('./pages/Home.vue', options));
const AcercaDePage = Vue.defineAsyncComponent(() =>
    loadModule('./pages/AcercaDe.vue', options),
);
const LoginPage = Vue.defineAsyncComponent(() =>
    loadModule('./pages/auth/Login.vue', options),
);
const MiPerfilPage = Vue.defineAsyncComponent(() =>
    loadModule('./pages/auth/MiPerfil.vue', options),
);
const RegisterPage = Vue.defineAsyncComponent(() =>
    loadModule('./pages/auth/Register.vue', options),
);
const ProductosListadoPage = Vue.defineAsyncComponent(() =>
    loadModule('./pages/productos/Listado.vue', options),
);
const ProductosAdicionarPage = Vue.defineAsyncComponent(() =>
    loadModule('./pages/productos/Adicionar.vue', options),
);
const ProductosEditarPage = Vue.defineAsyncComponent(() =>
    loadModule('./pages/productos/Editar.vue', options),
);
// ***********************************


// ***********************************
// 3. Registro de Rutas para páginas
// ***********************************
const routes = [
  { path: '/', component: HomePage },
  { path: '/acerca-de', component: AcercaDePage },
  // Páginas de administración
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/mi-perfil', component: MiPerfilPage },
  // Productos
  { path: '/productos/', component: ProductosListadoPage },
  { path: '/productos/adicionar', component: ProductosAdicionarPage },
  { path: '/productos/editar/:id', component: ProductosEditarPage, props: true },
];
// ***********************************

// Registro del router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
// Registro de la App
const AppComponent = Vue.defineAsyncComponent(() => loadModule('./App.vue', options));
const app = Vue.createApp({
  components: {
    'app-component': AppComponent,
  },
  template: '<app-component></app-component>',
});

// ***********************************
// 4. Registro de Componentes
// ***********************************
app.component('loader-component', LoaderComponent);
// ***********************************
app.use(router);
app.use(store);
app.mount('#app');