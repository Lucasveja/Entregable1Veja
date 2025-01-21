// Array de usuarios registrados por defecto
const usuarios = [
  { usuario: "admin", contrasena: "1234" },
  { usuario: "lucas", contrasena: "abcd" },
  { usuario: "carlos", contrasena: "5678" },
];

// Guardar usuarios en localStorage si no están previamente
if (!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Referencias al DOM
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const messageDiv = document.getElementById("message");
const welcomeContainer = document.getElementById("welcome-container");
const welcomeMessage = document.getElementById("welcome-message");
const logoutButton = document.getElementById("logout-button");
const registerForm = document.getElementById("register-form");
const registerMessage = document.getElementById("register-message");

// Manejo del inicio de sesión
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Obtener usuarios desde localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  // Validar credenciales
  const usuarioValido = usuarios.find(
    (user) => user.usuario === username && user.contrasena === password
  );

  if (usuarioValido) {
    mostrarBienvenida(username);
  } else {
    mostrarMensaje("Usuario o contraseña incorrectos.", "error");
  }
});

// Mostrar mensaje en el DOM
function mostrarMensaje(mensaje, tipo) {
  messageDiv.textContent = mensaje;
  messageDiv.style.color = tipo === "error" ? "red" : "green";
}

// Mostrar la bienvenida al usuario
function mostrarBienvenida(username) {
  document.querySelector(".container").style.display = "none";
  welcomeContainer.style.display = "flex";
  welcomeMessage.textContent = `¡Bienvenido, ${username}!`;
}

// Manejo del cierre de sesión
logoutButton.addEventListener("click", () => {
  welcomeContainer.style.display = "none";
  document.querySelector(".container").style.display = "flex";
  usernameInput.value = "";
  passwordInput.value = "";
  mostrarMensaje("", "");
});

// Manejo del registro de nuevos usuarios
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  // Validar que los campos no estén vacíos
  if (!username || !password) {
    mostrarMensajeRegistro("Por favor, completa todos los campos.", "error");
    return;
  }

  // Obtener usuarios almacenados
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el usuario ya existe
  const usuarioExistente = usuarios.find((user) => user.usuario === username);
  if (usuarioExistente) {
    mostrarMensajeRegistro("El usuario ya existe. Intenta con otro nombre.", "error");
    return;
  }

  // Agregar nuevo usuario y guardar en localStorage
  usuarios.push({ usuario: username, contrasena: password });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mostrarMensajeRegistro("Usuario registrado con éxito.", "success");

  // Limpiar el formulario
  registerForm.reset();
});

// Mostrar mensajes para el registro
function mostrarMensajeRegistro(mensaje, tipo) {
  registerMessage.textContent = mensaje;
  registerMessage.style.color = tipo === "error" ? "red" : "green";
}
