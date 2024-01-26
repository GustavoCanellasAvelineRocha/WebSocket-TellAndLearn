const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", function (event) {
  console.log("Conectado ao servidor WebSocket");
});

socket.addEventListener("message", function (event) {
  const chatDiv1 = document.getElementById("chat1");
  chatDiv1.innerHTML += "<p>" + event.data + "</p>";
});

socket.addEventListener("close", function (event) {
  console.log("Conexão fechada");
});

function sendMessageChat1() {
  const messageInput = document.getElementById("messageInput1");
  let message = messageInput.value;
  message = "🐕 disse: " + message;
  socket.send(message);
  messageInput.value = "";
}