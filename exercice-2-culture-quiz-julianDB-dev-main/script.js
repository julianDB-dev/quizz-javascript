/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
  const ul = document.getElementById("answers")
  let score = 0
  const afficherScore =  document.getElementById("score")
  let index = 0
  
  
  const afficherQuestions = ()=>{
    document.getElementById("question").innerHTML = questions[index].question;
    questions[index].answers.map((value)=>{

      const li = document.createElement("li");
      ul.appendChild(li).className = "answer";
      li.innerHTML = value
      li.addEventListener('click', resultat)

     });
    };
    const resultat = (e)=>{
      if(questions[index].answers.indexOf(e.target.innerHTML) === questions[index].correctAnswerIndex) {
        score++
        afficherScore.innerHTML = score
      }
      
      index++
    
      while (ul.firstChild){
        ul.removeChild(ul.firstChild)
      }
      if (index < 4) {
        afficherQuestions()
      }
      else{
        document.getElementById("question").innerHTML = "Merci d'avoir répondu";
      }
    }
     
    
  afficherQuestions();
});

