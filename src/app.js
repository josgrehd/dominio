/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];

  var adj = ["great", "big"];

  var noun = ["jogger", "racoon"];

  let cadena1 = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        cadena1.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  console.log(cadena1);
};
