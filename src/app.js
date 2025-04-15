import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/dragon.png";
import "./assets/img/perro.png";
import "./assets/img/alien.png";
import "./assets/img/mago.png";


window.onload = function () {
  let excuses = [
    "Un dragón salió del armario, pensó que mi tarea era una ofensa a su especie y la quemó con fuego.",
    "Mi perro se comió mi tarea… pero luego se volvió consciente de lo que hizo y huyó a vivir con una manada de lobos en Canadá.",
    "Unos alienígenas la abdujeron porque contenía el secreto para viajar en el tiempo. Me dijeron que era demasiado peligrosa para la humanidad.",
    "Mi tarea fue accidentalmente utilizada como pergamino por un mago retirado que necesitaba un hechizo para hacer café instantáneo.",
    "Estaba horneando cupcakes y sin querer mezclé mi tarea con la mezcla de vainilla. Estaba deliciosa, por cierto."]

    let images = [
      "./assets/img/dragon.png", //Dragon
      "./assets/img/perro.png", //Perro
      "./assets/img/alien.png", //Aliens
      "./assets/img/mago.png", //Mago
      "https://i.imgflip.com/jddwd.jpg" //Cupcake
    ]

    let randomExcuses = Math.floor(Math.random() * excuses.length);

    document.getElementById("excuse").innerText = excuses[randomExcuses];

    let img = document.createElement("img");
    img.src = images[randomExcuses];
    img.alt = "Excusa Visual";
    img.className = "img-fluid rounded shadow mt-3";
    img.style.width = "500px";

    document.getElementById("imagne-excusa").appendChild(img);

};
