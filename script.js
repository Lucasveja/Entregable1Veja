// Array de usuarios registrados
const usuarios = [
    { usuario: "admin", contrasena: "1234" },
    { usuario: "lucas", contrasena: "abcd" },
    { usuario: "carlos", contrasena: "5678" },
  ];
  
  // Función para iniciar sesión
  function iniciarSesion() {
    const usuarioIngresado = prompt("Ingresa tu usuario:");
    const contrasenaIngresada = prompt("Ingresa tu contraseña:");
  
    // Validar usuario y contraseña
    const usuarioValido = usuarios.find(
      (user) =>
        user.usuario === usuarioIngresado &&
        user.contrasena === contrasenaIngresada
    );
  
    if (usuarioValido) {
      alert(`¡Bienvenido, ${usuarioIngresado}!`);
      redirigirUsuario();
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }
  
  // Función para redirigir al usuario
  function redirigirUsuario() {
    document.body.innerHTML = `
      <h1>Bienvenido a tu cuenta</h1>
      <p>¡Has ingresado correctamente!</p>
    `;
  }
  