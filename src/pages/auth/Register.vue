<template>
  <div>
    <h1>Registro</h1>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre <span style="color: red">*</span></label>
        <Field type="text" class="form-control" name="name" />
        <ErrorMessage name="name" class="text-danger small" />
      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label">Apellido <span style="color: red">*</span></label>
        <Field type="text" class="form-control" name="lastname" />
        <ErrorMessage name="lastname" class="text-danger small" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label"
        >Correo electrónico <span style="color: red">*</span></label
        >
        <Field type="email" class="form-control" name="email" />
        <ErrorMessage name="email" class="text-danger small" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label"
        >Contraseña <span style="color: red">*</span></label
        >
        <Field type="password" class="form-control" name="password" />
        <ErrorMessage name="password" class="text-danger small" />
      </div>
      <div class="mb-3">
        <label for="repeat_password" class="form-label"
        >Repite tu contraseña <span style="color: red">*</span></label
        >
        <Field type="password" class="form-control" name="repeat_password" />
        <ErrorMessage name="repeat_password" class="text-danger small" />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary">Registrar</button>
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
  name: 'RegisterPage',
  data() {
    const schema = toFormValidator(
      z
        .object({
          name: z.string({ required_error: 'Requerido' }).nonempty(),
          lastname: z.string({ required_error: 'Requerido' }).nonempty(),
          email: z.string({ required_error: 'Requerido' }).nonempty(),
          password: z.string({ required_error: 'Requerido' }).nonempty(),
          repeat_password: z.string({ required_error: 'Requerido' }).nonempty(),
        })
        .refine((data) => data.password === data.repeat_password, {
          message: "Las contraseñas no coinciden.",
          path: ['repeat_password'],
        }),
    );
    return {
      message: '',
      schema,
    };
  },
  methods: {
    onSubmit(user) {
      window.api
        .post('auth/register', user)
        .then((response) => {
          if (response.data.success) {
            this.message = 'Su registro fue realizado sin problemas.';
          } else {
            this.message = 'Hubo un error en la creación de su cuenta.';
          }
        })
        .catch((error) => console.log(error));
    }
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

<style scoped>

</style>
