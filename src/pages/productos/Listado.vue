<template>
  <div>
    <div class="d-flex justify-content-between">
      <h2>Listado de Productos</h2>
      <div>
        <router-link class="btn btn-outline-primary" to="/productos/adicionar">
          Adicionar Producto
        </router-link>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Imagen</th>
        <th>Precio</th>
        <th>Creado en</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(producto, index) in productos" :key="index">
        <td>
          {{producto.product_name}}
        </td>
        <td>
          {{producto.product_description}}
        </td>
        <td>
          <img :src="producto.product_image" class="img-fluid"/>
        </td>
        <td>
          {{producto.product_price}}
        </td>
        <td class="fecha">
          {{formatoDeFecha(producto.created_at)}}
        </td>
        <td>
          <router-link :to="'/productos/editar/' + producto.id" class="btn btn-outline-primary btn-sm">
            Editar
          </router-link>
          &nbsp;
          <a @click="eliminarProducto(producto.id)" class="btn btn-outline-primary btn-sm">Eliminar</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ProductosListadoPage',
  data() {
    return {
      productos: [],
    };
  },
  methods: {
    formatoDeFecha(fecha) {
      return moment(fecha).format('MMMM D, YYYY');
    },
    eliminarProducto(id) {
      console.log(id);
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    window.api
        .get('products/myProducts')
        .then((response) => this.productos = response.data.products);
  },
  components: {},
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped>
img{
  max-width:100px;
  height:auto;
}
.fecha{
  text-transform: capitalize;
}
</style>
