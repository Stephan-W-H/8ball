function randomAnswer(){
    let randIndex = Math.floor(Math.random()* answers.length)
    givenAnswer = answers[randIndex]
    updateView();
}
    
