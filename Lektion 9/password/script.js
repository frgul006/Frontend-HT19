function togglePassword() {
  const input = document.getElementById('password-field');

  //   if (input.type === 'password') {
  //     input.type = 'text';
  //   } else if(input.type === 'text') {
  //     input.type = 'password';
  //   }
  switch (input.type) {
    case 'password': {
      input.type = 'text';
      break;
    }
    case 'text': {
      input.type = 'password';
      break;
    }
    default: {
      console.error('Unknown type');
      break;
    }
  }
}
