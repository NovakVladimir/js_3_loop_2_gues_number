/*
This funciton remove all child-elements from some parent-element. Its argument is id of parent element.
*/

function deleteOutput(idOutput) {
    let myNode = document.getElementById(idOutput);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

/*
This insert some element to the parent-element. Its argument is: 1 - id of parent element and; 2 - something we want to insert in this parent-element. 
*/
function insertOutput(idOutput, toOutput) {
        let container = document.getElementById(idOutput);
        container.insertAdjacentHTML('beforeend', `${toOutput}`);
    }

/*
This function get value from <input> and translate it from text value to digital. Its argument is id of <input>
*/
function getInput(idInput) {
    let inputValue_1 = Number(document.getElementById(idInput).value);
    return inputValue_1;
}

/*
Tenth task
*/

function rightResult(result) {
    deleteOutput("container");
    insertOutput("container", `<p class="outputResult">Your number is ${result}</p>`);
}

function guesNumb(fromNumb, toNumb) {
    let numb_1 = fromNumb;
    let numb_2 = toNumb;
    let half = Math.floor((numb_1 + numb_2) / 2);
    deleteOutput("container");
    insertOutput("container", `<input type="button" value="< ${half}" onclick="guesNumb(${numb_1}, ${half})"><input type="button" value="= ${half}" onclick="rightResult(${half})"><input type="button" value="> ${half}" onclick="guesNumb(${half}, ${numb_2})">`);    
}