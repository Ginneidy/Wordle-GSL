import { selectRandomWord } from "./selectWord.js";
import { process_world, renderize_results } from "./process.js";

var attempts = 5;
var word;
const sendButton = document.getElementById('send');

const joinLetters = () => {
    const letter1 = document.getElementById('otp1').value;
    const letter2 = document.getElementById('otp2').value;
    const letter3 = document.getElementById('otp3').value;
    const letter4 = document.getElementById('otp4').value;
    const letter5 = document.getElementById('otp5').value;

    const user_word = letter1 + letter2 + letter3 + letter4 + letter5;
    return user_word;

}

const validateAttempts = () => {

    const word_user = joinLetters();
    if (!word) {
        word = selectRandomWord();
        // console.log("La palabra seleccionada es: ", word);
    }
    const response = process_world(word_user, word);
    response['attempt'] = attempts;
    
    if (attempts == 1) {
        response["final"] = true;
    }
    // return response;
    renderize_results(response.results, attempts, word_user);
    attempts--;
}

sendButton.addEventListener('click', validateAttempts);