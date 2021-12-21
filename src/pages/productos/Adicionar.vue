<template>
  <div>
    <h2>Adicionar Producto</h2>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="mb-3">
        <label for="product_name" class="form-label">
          Nombre del Producto<span style="color: red">*</span>
        </label>
        <Field type="text" class="form-control" name="product_name" />
        <ErrorMessage name="product_name" class="text-danger small" />
      </div>
      <div class="mb-3">
        <label for="product_description" class="form-label">
          Descripción<span style="color: red">*</span>
        </label>
        <Field as="textarea" type="text" class="form-control" name="product_description" />
        <ErrorMessage name="product_description" class="text-danger small" />
      </div>
      <div class="mb-3">
        <label for="product_price" class="form-label"> Precio </label>
        <Field type="number" class="form-control" name="product_price" />
        <ErrorMessage name="product_price" class="text-danger small" />
      </div>
      <div class="mb-3">
        <label for="product_image" class="form-label"> Imagen </label>
        <Field type="file" class="form-control" name="product_image" />
        <ErrorMessage name="product_image" class="text-danger small" />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary">Añadir</button>
      </div>
      <div class="mb-3">
        {{ message }}
      </div>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from '../../vendor/js/vee-validate.js';
import { toFormValidator } from '../../vendor/js/vee-validate-zod.min.js';
import { z } from '../../vendor/js/zod.mjs';

export default {
  name: 'ProductosAdicionarPage',
  data() {
    const schema = toFormValidator(
      z.object({
        product_name: z.string({ required_error: 'Requerido' }).nonempty(),
        product_description: z.string({ required_error: 'Requerido' }).nonempty(),
      }),
    );
    return {
      message: '',
      schema,
    };
  },
  methods: {
    onSubmit(producto) {
      let formData = new FormData();
      for (let index in producto) {
        formData.append(index, producto[index]);
      }
      formData.append('image', producto.product_image[0]);
      window.api
        .post('products/save', formData)
        .then((response) => {
          if (response.data.success) {
            this.message = 'Guardado!';
          } else {
            this.message = 'Hubo un error.';
          }
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
