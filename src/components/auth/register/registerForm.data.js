import * as Yup from 'yup';

export function initialValues() {
  return {
    email: '',
    password: '',
    repeatPassword: '',
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email('El email no es correcto')
      .required('El email es obligatorio'),
    password: Yup.string()
      .required('La contraseña es obligatoria')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    repeatPassword: Yup.string()
      .required('La contraseña es obligatoria')
      .oneOf([Yup.ref('password')], 'Las contraseñas tienen que ser iguales'),
  });
}
