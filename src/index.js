let nome = "Piratof";
let experiencia = 7.003;
let nivel = "";

if (experiencia <= 1.0) {
  nivel = "Ferro";
  console.log("O Herói " + nome + " está no nível de " + nivel);
} else if (experiencia >= 1.001 && experiencia <= 2.0) {
  nivel = "Bronze";
  console.log("O Herói " + nome + " está no nível de " + nivel);
} else if (experiencia >= 2.001 && experiencia <= 5.0) {
  nivel = "Prata";
  console.log("O Herói " + nome + " está no nível de " + nivel);
} else if (experiencia >= 5.001 && experiencia <= 7.0) {
  nivel = "Ouro";
  console.log("O Herói " + nome + " está no nível de " + nivel);
} else if (experiencia >= 7.001 && experiencia <= 8.0) {
  nivel = "Platina";
  console.log("O Herói " + nome + " está no nível de " + nivel);
} else if (experiencia >= 8.001 && experiencia <= 9.0) {
  nivel = "Ascendente";
  console.log("O Herói " + nome + " está no nível de " + nivel);
} else if (experiencia >= 9.001 && experiencia <= 10.0) {
  nivel = "Imortal";
  console.log("O Herói " + nome + " está no nível de " + nivel);
} else if (experiencia >= 10.001) {
  nivel = "Ascendente";
  console.log("O Herói " + nome + " está no nível de " + nivel);
} else {
  console.log("Não foi possível achar o nível do Herói " + nome);
}
