import { selectRandomWord } from "./selectWord.js";

const attempts = 5;
const sendButton = document.getElementById('send');
const letter1 = document
const getAttempts = () => {
    return attempts;
}

const joinLetters = () => {
    const letter1 = document.getElementById('otp1').value;
    const letter2 = document.getElementById('otp2').value;
    const letter3 = document.getElementById('otp3').value;
    const letter4 = document.getElementById('otp4').value;
    const letter5 = document.getElementById('otp5').value;

    const user_word = letter1 + letter2 + letter3 + letter4 + letter5;
    return user_word;
}

sendButton.addEventListener('click', joinLetters);


const validateAttempts = (attempts) => {
    var word;
    if (attempts === 5) {
        // Primer palabra entonces se crea la palabra
        word = selectRandomWord();
    }
    else if (attempts === 1) {
        // Ultima palabra entonces se reinicia el juego
    }
}