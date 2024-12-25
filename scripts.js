// Función para copiar la IP al portapapeles
document.getElementById("copy-ip-button").addEventListener("click", function () {
  const ip = "play.insanitycraft.net";
  navigator.clipboard.writeText(ip)
    .then(() => alert("IP copiada: " + ip))
    .catch(() => alert("Error al copiar la IP."));
});

// Reproducir sonido al pasar el mouse sobre botones o enlaces
function playButtonSound() {
  const buttonSound = new Audio("boton.mp3");
  buttonSound.play();
}

// Enviar formulario al Webhook de Discord
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // URL del Webhook de Discord
  const webhookURL = "https://discord.com/api/webhooks/1316222947794358292/QmOOnfxjYcsCaUP5XJjG7vKukdFt5rTb0TmxKEJMH_VAoAfx_f8ZMutM6TQEs06G8aNO";

  // Cuerpo del mensaje que se enviará al canal de Discord
  const payload = {
    content: `Nuevo mensaje de contacto\n**Nombre:** ${name}\n**Email:** ${email}\n**Mensaje:**\n${message}`
  };

  // Enviar la solicitud POST a Discord Webhook
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        alert("Mensaje enviado con éxito.");
      } else {
        alert("Error al enviar el mensaje.");
      }
    })
    .catch(error => {
      console.error("Error al enviar el mensaje:", error);
      alert("Error al enviar el mensaje.");
    });

  // Limpiar el formulario después de enviarlo
  document.getElementById("contact-form").reset();
});

// Simulación de carga de jugadores
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("player-list").innerText = "23 jugadores conectados";
});

// Asegúrate de que el evento de sonido esté activo en todos los botones y enlaces
function playButtonSound() {
  const buttonSound = new Audio('boton.mp3');
  buttonSound.play();
}

// Vincula el evento a todos los elementos con hover
document.addEventListener("DOMContentLoaded", () => {
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseover', playButtonSound);
  });
});
