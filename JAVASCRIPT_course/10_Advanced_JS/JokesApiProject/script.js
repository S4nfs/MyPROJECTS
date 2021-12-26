//Get https://icanhazdadjoke.com/



const jokes = document.querySelector('.jokes');
const jokeBtn = document.querySelector('.jokeBtn');


const generateJokes = () => {
const setHeader = {
    headers: {
        Accept: 'application/json' 
    }
}
    fetch('https://icanhazdadjoke.com/', setHeader)                                //PROMISE
    .then = ((responseMila) => {                                       
        console.log(responseMila.json());
        
    }).catch((error) => {
        console.log(error);
        })

}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();