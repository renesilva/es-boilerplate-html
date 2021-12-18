import { auth } from './auth.module.js';

const store = Vuex.createStore({
  modules: {
    auth,
  },
});

export default store;
