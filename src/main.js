import store from './store/index.js';
// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor.js';

// ***********************************
// 1. Registro de Componentes
// ***********************************
const BotonComponent = Vue.defineAsyncComponent(() =>
  loadModule('./components/Boton.vue', options),
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
// ***********************************


// ***********************************
// 3. Registro de Rutas para páginas
// ***********************************
const routes = [
  { path: '/', component: HomePage },
  { path: '/acerca-de', component: AcercaDePage },
  { path: '/login', component: LoginPage },
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
app.component('botones-component', BotonComponent);
// ***********************************
app.use(router);
app.use(store);
app.mount('#app');