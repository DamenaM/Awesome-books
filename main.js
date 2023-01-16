// const mylist = document.getElementById('books');
// const clickbutton = document.getElementById('clickbutton');

// const { div } = require("prelude-ls");

// const { div } = require("prelude-ls");

// const title = document.getElementById('titleid');
// const author = document.getElementById('authorid');

// const lititle = document.createElement('div');
// const liauthor = document.createElement('div');
// const btn = document.createElement('button');


// clickbutton.addEventListener('click', () => {

//   lititle.setAttribute('titleid', title.value);
//   liauthor.setAttribute('authorid', author.value);

//   btn.textContent = 'Remove';
//   lititle.appendChild(document.createTextNode(title.value));
//   liauthor.appendChild(document.createTextNode(author.value));

//   mylist.appendChild(lititle);
//   mylist.appendChild(liauthor);
//   mylist.appendChild(btn);
// });
// ----------------//------------------------------------------

let mylist = document.getElementById('books');
let mydiv= document.createElement('div');

// const clickbutton = document.getElementById('clickbutton');
document.getElementById('clickbutton').addEventListener('click',addAuthor);


function addAuthor() {
  let title = document.getElementById('titleid').value;
  let author = document.getElementById('authorid').value;
  let bookDetails=`<div>
    <div>
    <div> ${title}</div>
    <div> ${author}</div> 
    <div>
    <button class="clickdelete" type="button"> Delete </button>
     <div> <br>
    </div>`;

// mylist.insertAdjacentHTML('beforeend',bookdetails);
 
};






