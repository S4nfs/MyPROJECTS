/*✔️ see BOM_DOM.png
BOM(Browser Object Model)       :within Window like history, location, screen, navigator, frames, XMLHttpRequest
DOM(Document Object Modal)      :within Document ..used in events later


✔️Navigate through the DOM 

1: document.documentElement
      returns the Element that is the root element of the document. 
2: document.head
3: document.body
4: document.body.childNodes (include tab,enter and whiteSpace)
  list of the direct children only 
5: document.children (without text nodes, only regular Elements)
6: document.childNodes.length

👉 Practice Time 
How to check whether an element has child nodes or not?
we will use hasChildNodes()

👉 Practice Time 
How to find the child in DOM tree 
firstChild vs firstElementChild
lastChild vs lastElementChild 
const data = document.body.firstElementChild;
undefined
data
data.firstElementChild
data.firstElementChild.firstElementChild
data.firstElementChild.firstElementChild.style.color = "red"
vs 
document.querySelector(".child-two").style.color = "yellow";

👉 How to find the Parent Nodes 
document.body.parentNode
document.body.parentElement

👉 How to find or access the siblings
document.body.nextSibling
document.body.nextElementSibling
document.body.previousSibling
document.body.previousElementSibling*/