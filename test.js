function construct(data){
  let wrap = document.querySelector('.Articles__table');
  wrap.innerHTML = '';
  if(data.length == 0){
    let newNode = document.importNode(Articles__templateErrorOne.content, true);
    newNode.textContent = 'posts not found';
    document.querySelector('.Articles__table').appendChild(newNode);
  }
  data.forEach(element => {
    let newNode = document.importNode(Articles__templateContent.content, true);
    newNode.querySelector('.content__header').textContent = element.title;
    newNode.querySelector('.content__body').textContent = element.body;
    document.querySelector('.Articles__table').appendChild(newNode);
  });
}

async function req(data){
  let wrap = document.querySelector('.Articles__table');
  wrap.innerHTML = '';
  let respId = await fetch('https://jsonplaceholder.typicode.com/users?username=' + data.get('form__input'));
  let rjson = await respId.json();
  if(respId.ok){
    try{
      let userId = rjson[0].id;
      await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId).then(response => response.json()).then(json => construct(json));
    }
    catch{
      let newNode = document.importNode(Articles__templateErrorOne.content, true);
      newNode.querySelector('.ErrorOne__content_body').textContent = 'user not found';
      document.querySelector('.Articles__table').appendChild(newNode);
    }
  }
  else{
    let newNode = document.importNode(Articles__templateErrorTwo.content, true);
    newNode.querySelector('.ErrorTwo__content_body').textContent = respId.status;
    document.querySelector('.Articles__table').appendChild(newNode);
  }
  setTimeout(function(){document.querySelector('#spinner').className = 'spinnerNo';}, 500);
}

const f = document.querySelector('#Articles__input_form');
f.addEventListener('submit', function(evt){
  document.querySelector('#spinner').className = 'spinner';
  evt.preventDefault();
  let data = new FormData(f);
  req(data);
});
