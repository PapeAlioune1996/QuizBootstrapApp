//selectionner tous les elements necessaires
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const resultat = document.querySelector(".resultat");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .duree_line");
const timeText = document.querySelector(".duree .duree_txt");
const timeCount = document.querySelector(".duree .duree_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //faire apparaitre info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //cacher info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //cacher info box
    quiz_box.classList.add("activeQuiz"); //faire apparaitre quiz box
    showQuetions(0); //appel de la fonction showQestions 
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(30); //appel de la fonction startTimer 
    startTimerLine(0); //appel de la fonction startTimerLine
}

let timeValue =  30;
let compteurQuestion = 0;
let que_numb = 1;
let scoreJoueur = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = resultat.querySelector(".buttons .restart");
const quit_quiz = resultat.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    resultat.classList.remove("activeResult"); 
    timeValue = 30; 
    compteurQuestion = 0;
    que_numb = 1;
    scoreJoueur = 0;
    widthValue = 0;
    showQuetions(compteurQuestion); //appel de la fonction showQestions
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //effacer le compteur
    clearInterval(counterLine); //
    startTimer(timeValue); //appel de la fonction startTimer
    startTimerLine(widthValue); //appel de la fonction startTimerLine     timeText.textContent = "Duree"; //change the text of timeText to Duree
    next_btn.classList.remove("show"); //cacher le bouton suivant
}

//
quit_quiz.onclick = ()=>{
    window.location.reload(); //rafraichir la fenetre
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_question");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(compteurQuestion < questions.length - 1){ 
        //if question count is less than total question length
        compteurQuestion++; //increment the compteurQuestion value
        que_numb++; //increment the que_numb value
        showQuetions(compteurQuestion); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Duree"; //change le timeText en Duree
        next_btn.classList.remove("show"); //cacher le bouton netx_btn
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //appel de la fonction showResult 
    }
}

// affichage des questions et options 
function showQuetions(index){
    const question_text = document.querySelector(".question_text");

    let question_tag = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    question_text.innerHTML = question_tag; //ajout d'un nouveau span en dessous de question_tag
    option_list.innerHTML = option_tag; //ajout d'un nouveau div en dessous de  option_tag
    
    const option = option_list.querySelectorAll(".option");

    // 
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// deux nouveau div pour les  icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//fonction qui permet d'afficher le resultat
//si le joueur clique sur une option
function optionSelected(answer){
    clearInterval(counter); //vider le compteur
    clearInterval(counterLine);
    let reponseJoueur = answer.textContent; //recuperer l'option dont l'utilisateur a choisis
    let reponseCorrecte = questions[compteurQuestion].reponse; //recuperer la bonne reponse
    const TousLesOptions = option_list.children.length; //afficher tous les options 
    
    if(reponseJoueur == reponseCorrecte){ 
        //si le joueur choisis une reponse correcte
        scoreJoueur += 1; //on incremente son score
        answer.classList.add("correct"); //ajouter une couleur vert a la reponse correcte
        answer.insertAdjacentHTML("beforeend", tickIconTag); //ajouter une couleur rouge sur les autres options 
        console.log("Reponse Correct");
        console.log("Vous avez  = " + scoreJoueur +"points");
    }else{
        answer.classList.add("incorrect"); //ajouter une couleur rouge sur les autres options 
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        

        for(i=0; i < TousLesOptions; i++){
            if(option_list.children[i].textContent == reponseCorrecte){ 
                 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < TousLesOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //cacher info box
    quiz_box.classList.remove("activeQuiz"); //cacher quiz box
    resultat.classList.add("activeResult"); //faire apparaitre result box
    const scoreText = resultat.querySelector(".score_text");
    //les evaluations a la fin du jeu
    if (scoreJoueur < 10){ 

        let scoreTag = '<span>Insuffissant! , Vous avez que <p>'+ scoreJoueur +'</p> sur <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(scoreJoueur > 10  && scoreJoueur <15){ 
        let scoreTag = '<span>Pas mal ! , Vous avez<p>'+ scoreJoueur +'</p> sur <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;

    }else if(scoreJoueur > 15){
        let scoreTag = '<span>Genial ! , Vous avez<p>'+ scoreJoueur +'</p> sur <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(scoreJoueur >= 20 && scoreJoueur < 25){
        let scoreTag = '<span>Super ! , Vous avez<p>'+ scoreJoueur +'</p> sur <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(scoreJoueur ==25){ 
        let scoreTag = '<span>Bravo ! , Vous avez<p>'+ scoreJoueur +'</p> sur <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    
}

//demarer le timeur
function startTimer(time){
    counter = setInterval(timer, 1000);

    function timer(){
        timeCount.textContent = time; //changer la valeur du timeCounteur par 30
        time--; //decrementer la valeur du temps
        if(time < 9){ //si le temp restant est < 9 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //ajouter un 0 devant ex 09
        }
        if(time <0){ 
            clearInterval(counter); //vide le compteur
            timeText.textContent = "Temps epuisee"; //changer le temps en Temps epuisee
            const TousLesOptions = option_list.children.length; //afficher tous les items des options 
            let reponseCorrecte = questions[compteurQuestion].reponse; //getting correct answer from array
            for(i=0; i < TousLesOptions; i++){
                if(option_list.children[i].textContent == reponseCorrecte){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Temps epuisee: Auto selected correct answer.");
                }
            }
            for(i=0; i < TousLesOptions; i++){
                option_list.children[i].classList.add("disabled"); //si le joueur selection une reponse automatique les autres seront desactive
            }
            next_btn.classList.add("show"); //faire apparaitre le boutton next_btn 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 30);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 1800){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}