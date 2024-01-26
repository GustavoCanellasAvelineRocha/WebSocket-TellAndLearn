const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

const clients = new Array();

server.on("connection", (socket) => {
  console.log("Cliente conectado");

  clients.push(socket);

  socket.on("message", (message) => {
    console.log(`Mensagem recebida: ${message}`);

    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  socket.on("close", () => {
    console.log("Cliente desconectado");

    clients.pop(socket);
    console.log(clients);
  });
});

server.on("listening", () => {
  console.log("Servidor WebSocket executando na porta 8080");
});
