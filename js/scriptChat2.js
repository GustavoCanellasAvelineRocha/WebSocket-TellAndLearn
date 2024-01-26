const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", function (event) {
  console.log("Conectado ao servidor WebSocket");
});

socket.addEventListener("message", function (event) {
  const chatDiv2 = document.getElementById("chat2");
  chatDiv2.innerHTML += "<p>" + event.data + "</p>";
});

socket.addEventListener("close", function (event) {
  console.log("Conexão fechada");
});

function sendMessageChat2() {
  const messageInput = document.getElementById("messageInput2");
  let message = messageInput.value;
  message = "🐈 disse: " + message;
  socket.send(message);
  messageInput.value = "";
}
