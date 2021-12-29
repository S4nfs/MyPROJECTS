const addbutton = document.querySelector('#add');

const addNewNote = (text = '') => {
const note = document.createElement('div');
note.classList.add('note');
const htmlData  = `


`
}
addbutton.addEventListener('click', () => addNewNote() );