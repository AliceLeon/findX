
let i = 0;
let speed = 10;
let txt = `
;This is a search to find something hidden within the game. The nature of this hidden entity is unknown.;
----------------------------;
What is x?;
Is it a place?;
Is it a thing?;
Is it an idea/experience?;;
x could be any one or more of those. The value of x, whether quantitative or qualitative varies, from player to player. The game is completed once you have found x.;
----------------------------;
The game will give you clues/hints to guide you along the path of discovering x.;
Some of the information provided to you will be real and some will be imaginary, made up by the game.;
It is for you to determine what information is of relevance.;
`;
const help = `
;The game recognises places, objects and environments. As you navigate through this virtual space, you embody a robot that is physically in the game(Pablo’s friend), who becomes your eyes and ears in the game.;;
The robot understands the instructions on the right;`;

let height = 0;
const board = document.getElementById("txt");
window.addEventListener('load', writeIntro());

function writeIntro() {
    if (i < txt.length) {
        if (txt.charAt(i) !== `;`) {
            board.innerHTML += txt.charAt(i);
        } else {
            board.innerHTML += `<br>`;
        }
        i++;
        setTimeout(writeIntro, speed);
    }
}
function helpin(newText, newSpeed) {
    txt += newText;
    speed = newSpeed;
    writeIntro();
}

console.log("okay");
// document.addEventListener('keydown', logKey);

function logKey(e) {
    const keyyy = String.fromCharCode(e.keyCode);
    console.log(`${keyyy} has been pressed`);
    document.getElementById("input").innerText += `${keyyy}`;
}
const input = document.getElementById("input");

function appendCharacter(c) {
    switch (c) {
        case 8: // Backspace
            input.innerText = input.innerText.slice(0, -1);
            break;
        case 32: // space
            input.innerText = input.innerText + `\xa0`;
            break;
        case 81: // Q
        case 113: // q
            input.innerHTML = ``;
            break;
        default:
            input.innerText = input.innerText + String.fromCharCode(c);
    }
}

// Keypress gets the keyCode of the current character not key.
// e.g. pressing the 'A' key will result in 'a' unless 'Shift' is also held.
window.addEventListener('keypress', function (e) {
    // console.log(`e.charCode: ${e.charCode}, e.keyCode: ${e.keyCode}`)
    appendCharacter(e.keyCode);
});

// Use Keydown to get special keys like Backspace, Enter, Esc.
window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 8: // Backspace
            e.preventDefault(); // Stops the backspace key from acting like the back button.
            appendCharacter(e.keyCode);
            break;
        case 32: // Backspace
            e.preventDefault(); // Stops the backspace key from acting like the back button.
            appendCharacter(e.keyCode);
            break;
        case 13:
            e.preventDefault();
            getAnAnswer(input.innerText);
            input.innerHTML = ``;
            // alert("gocha");
            break;
    }
});

function getAnAnswer(s) {
    const ss = s.trim().slice(0, 30);
    board.innerHTML += `<br>> ${ss}<br>`;
    const str = ss.toUpperCase();
    switch (str) {
        case "W":
            helpin(`;I'm heading Forward;`, 50);
            break;
        case "HELP":
            helpin(help, 50);
            break;
        case "A":
        case "S":
        case "D":
        case "J":
        case "K":
        case "I":
        case "L":
        case "HELP":
        case "OBSERVE":
        case "PICK":
            helpin(`;under constuction sry;`, 50);
            break;
        case `MOVING`:
            console.log('triggered');
            movingTest();
            break;
        default:
            helpin(`;I don't understand;`, 20);
            break;
    }
}

function movingTest() {
    const x = document.getElementById("moving");
    x.style.display = "block";
    setTimeout(function(){ document.getElementById("moving").style.display = "none"; }, 6000);
}