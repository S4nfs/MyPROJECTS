const addbutton = document.querySelector('#add');

const addNewNote = (text = 'wfwefw') => {
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

//    hide the text area if contain any user data, using hidden class in css *****************************************

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
    const textarea = note.querySelector('textarea');


    //deleting the data
    delButton.addEventListener('click', () => {
        note.remove();
    })

    //toggle using edit button
    editButton.addEventListener('click', () => {
    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
    
    })

    document.body.appendChild(note);                                                        //append means to add something
}
addbutton.addEventListener('click', () => addNewNote() );