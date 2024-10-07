updateView()
function updateView(){
    
    app.innerHTML = /*HTML*/ `

    <h2>Dette er den magiske 8 ballen med sine vise ord</h2>
    <div class="ball8">
    <div class="whiteCircle" onclick="randomAnswer()">
    ${givenAnswer}
    </div>
    `
}
    
    
    