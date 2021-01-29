'use strict';

const array = [];

const form = document.getElementById('root-form');
const submitBtn = document.getElementById('submitBtn');
const container = document.getElementById('renderer');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { textInput },
  } = e; // target === form;
  
  if(!textInput.value) {
    throw new Error();
  }

  array.push(textInput.value);

  //А можно как то три нижние строчки в одну объеденить красиво?
  const newLi = document.createElement('li');
  const removeBtn = document.createElement('button');

  newLi.textContent = `${textInput.value}`;
  newLi.dataset.arrayId = array.length - 1;

  removeBtn.textContent = 'delete entry';
  removeBtn.addEventListener('click', (e) => {
    const {target: parentElement} = e;
    console.dir(e);
    array.splice(parentElement.dataset.arrayId, 1);
    // parentElement.remove();
  });


  newLi.append(removeBtn);
  container.append(newLi); 

  form.reset();
});



