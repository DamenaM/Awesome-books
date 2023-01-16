const mylist = document.getElementById('books');
const clickbutton = document.getElementById('clickbutton');

const title = document.getElementById('titleid');
const author = document.getElementById('authorid');

const lititle = document.createElement('div');
const liauthor = document.createElement('div');
const btn = document.createElement('button');

clickbutton.addEventListener('click', () => {
  lititle.setAttribute('titleid', title.value);
  liauthor.setAttribute('authorid', author.value);

  btn.textContent = 'Remove';
  lititle.appendChild(document.createTextNode(title.value));
  liauthor.appendChild(document.createTextNode(author.value));

  mylist.appendChild(lititle);
  mylist.appendChild(liauthor);
  mylist.appendChild(btn);
});
