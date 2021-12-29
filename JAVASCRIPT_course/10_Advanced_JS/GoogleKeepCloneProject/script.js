const addbutton = document.querySelector('#add');

const addNewNote = (text = '') => {
const note = document.createElement('div');
note.classList.add('note');
const htmlData  = `;
<div class="operation">
<button class="edit"><i class="fas fa-edit"></i></button>
<button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main"></div>
<textarea class=""></textarea>
`;

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
}
addbutton.addEventListener('click', () => addNewNote() );