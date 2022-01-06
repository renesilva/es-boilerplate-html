<template>
  <div>
    <h2>Mi Perfil</h2>
    <p>
      Nombre: <strong>{{ user.name }}</strong>
    </p>
    <p>
      Apellido: <strong>{{ user.lastname }}</strong>
    </p>
    <p>
      ID: <strong>{{ user.id }}</strong>
    </p>
    <p>
      Email: <strong>{{ user.email }}</strong>
    </p>
  </div>
</template>
<script>
import { storageGet } from '../../services/storage.mjs';

export default {
  name: 'MiPerfilPage',
  data() {
    return {
      user: {},
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.user = storageGet('user').user;
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
