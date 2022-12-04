document.addEventListener('click', function(evt){
  evt.preventDefault;
  if(evt.target.matches('.btn__add')){
    let el = evt.target;
    let text = prompt('task', 'Ещё одна задача');
    let cont = el.parentElement;
    task = '<p class = "plan__content">'+text+'</p>';
    cont.innerHTML += '<div class = "plan__allContent">' + task + '<button class="btn__delete">-</button></div>';
}
  if(evt.target.matches('.btn__delete')){
    evt.target.parentElement.remove();
  }
})