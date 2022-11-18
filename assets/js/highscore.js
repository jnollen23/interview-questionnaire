/*
    All code to manage the scoring goes here
*/

function StoreScore(score, name){
    //Get the old score
    var oldScore = localStorage.getItem(name)
    if(oldScore !== null){
        //If the old score is lower then new score for given name overwrite the high score
        if(oldScore < score)
            localStorage.setItem(name, score);
    } 
    else {
        //If no old score store the value
        localStorage.setItem(name, score);
    }

    HighScoreTable();
}

/* Order Results */
function HighScoreTable(){
    var head = document.getElementById("scores");
    var list = document.createElement('ol');
    head.innerHTML = '';
    var keys = Object.keys(localStorage);

    //Adding a list for the high scores
    head.appendChild(list);
    list.setAttribute('type','1');

    var orderedItems = [];
    for(var i = 0; i < keys.length; i++){
        var name = keys[i];
        var score = localStorage.getItem(name);

        if(orderedItems.length > 0){
            for(var j = 0; j < orderedItems.length; j++){
                if(orderedItems[j].score < score){
                    orderedItems.splice(j, 0, {name, score});
                    name = '';
                    break;
                }
            }
            if(name !== '')  orderedItems.push({name, score});
        }
        else orderedItems.push({name, score})
    }

    orderedItems.forEach(x=>{
        list.innerHTML += `<div class="form-row"><li>${x.name}</li><span>${x.score}</span></div>`
    })
}