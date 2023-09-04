const { app } = require("./app");
const { config } = require("dotenv");

config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serviço rodando na URL http://localhost:8080");
});
