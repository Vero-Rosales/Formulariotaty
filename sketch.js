const teclado = document.getElementById("teclado");
const nombreInput = document.getElementById("nombre");
const enviarBtn = document.getElementById("enviar");

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
letras.split("").forEach((letra) => {
  const btn = document.createElement("button");
  btn.textContent = letra;
  btn.type = "button";
  btn.addEventListener("click", () => {
    nombreInput.value += letra;
  });
  teclado.appendChild(btn);
});

// Lógica del botón "Enviar" confuso
let clics = 0;
const posiciones = [
  "top: 0; left: 0;",
  "top: 0; right: 0;",
  "bottom: 0; left: 0;",
];

enviarBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (clics < 3) {
    enviarBtn.style.position = "absolute";
    enviarBtn.style[clics === 1 ? "right" : "left"] = "0";
    enviarBtn.style[clics === 2 ? "bottom" : "top"] = "0";
    clics++;
  } else {
    enviarBtn.classList.remove("rojo");
    enviarBtn.classList.add("verde");
    enviarBtn.textContent = "Enviar";
    enviarBtn.disabled = true;

    // Simular envío
    setTimeout(() => alert("Formulario enviado (al fin...)"), 500);
  }
});
