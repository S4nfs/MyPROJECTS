//Get https://icanhazdadjoke.com/



const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

//using PROMISES-----------------------------------------------------------------------------------------------------------------
const generateJokes = () => {
const setHeader = {
    headers: {
        Accept: 'application/json' 
    }
}
    fetch('https://icanhazdadjoke.com/', setHeader)                                
    .then((responseMila) => responseMila.json())
    .then((data) => {
     jokes.innerHTML = data.joke;  
    })

    .catch((error) => {
        console.log(error);
        })

}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();


//using Async Awaits-----------------------------------------------------------------------------------------------------------------

// const generateJokes = async () => {
//     try{
//         const setHeader = {
//             headers: {
//                 Accept: 'application/json' 
//             }
//         }
//         const responseMila = await fetch('https://icanhazdadjoke.com/', setHeader);
//         const data = await responseMila.json();
//         jokes.innerHTML = data.joke;
//     }
//     catch(err){
//         console.log(`The error is ${err}`);
//     }
// }
// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();
