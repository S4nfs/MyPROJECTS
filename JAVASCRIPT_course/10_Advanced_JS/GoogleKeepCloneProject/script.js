const addbutton = document.querySelector('#add');
const updateLocalStorage = () => {
const textAreaData = document.querySelectorAll('textarea');
const notes = [];
textAreaData.forEach(note => {
return notes.push(note.value);
})

localStorage.setItem('notes', JSON.stringify(notes));
}
const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData  = `
                    <div class="operation">
                    <button class="edit"><i class="fas fa-edit"></i></button>
                    <button class="delete"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="main ${text ? "" : "hidden"}"></div>
                    <textarea class="${text ? "hidden" : ""}"></textarea>           
                    `;

//hide the text area or the main div, 👆 using hidden class in css *****************************************

    note.insertAdjacentHTML('afterbegin', htmlData);
    console.log(note);
    /*Visualization of poition names
    ----beforebegin----
    <div>   </div>
    ----afterbegin----
    foo
    ----beforeend----
    <div>   </div>
    ----afterend----
    */

    //getting the references to the elements
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');


    //deleting the data
    delButton.addEventListener('click', () => {
        note.remove();
        updateLocalStorage();
    })

    //toggle using edit button
    textArea.value = text;
    mainDiv.innerHTML = text;

    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change', (event) =>{
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLocalStorage();
    })

    document.body.appendChild(note);                                                        //append means to add something
}


// getting Data back from local storage
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note) => addNewNote(note))
};
addbutton.addEventListener('click', () => addNewNote() );