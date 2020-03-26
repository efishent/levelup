const maxCharacters = 1000;
const url = 'https://api.voicerss.org';
const apiKey = 	'a5d0056b381d41309c35c96bbcbc8c45';


const buildUrl =(str) => `${url}?key=${apiKey}&src=${str}&f=48khz_16bit_stereo`;
const emptyString = (str) => str.split('').every(_char => _char === ' '|| _char === '\n');


let playBtn = () => document.getElementById('play-btn');
const textInput = () => document.getElementById('text-input');
const appContainer = () => document.getElementById('app-container');
const errorContainer = () => document.getElementById('error-messages');

playBtn().addEventListener('click', () => {
    if (!emptyString(textInput().value)){
        new Audio(buildUrl(textInput().value)).play();
    }
    else
        console.log('we have an error')
});

