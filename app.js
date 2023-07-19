// Variables declaration

const speech = new SpeechSynthesisUtterance();
const button = document.querySelector(".btn");
const textArea = document.querySelector(".textArea");
const voiceSelect = document.querySelector(".voiceSelect");
let voices = [];


// Select the first voice

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i));
};

// function to change voices

voiceSelect.addEventListener('change', ()=> {
    speech.voice = voices[voiceSelect.value];
}) 

// function to play text

button.addEventListener("click", ()=>{
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
    speech.voice = voices[0];
})
