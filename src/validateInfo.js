export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Digite seu usuário';
  }
 

  if (!values.email) {
    errors.email = 'Necessário inserir o email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'O endereço de email é inválido';
  }
  if (!values.password) {
    errors.password = 'Necessário inserir senha';
  } else if (values.password.length < 8) {
    errors.password = 'Insira uma senha com mais de 8 caracteres';
  }

  if (!values.password2) {
    errors.password2 = 'Necessário inserir senha';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'As senhas não são iguais';
  }
  return errors;
}
