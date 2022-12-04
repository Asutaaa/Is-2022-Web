const myForm = document.querySelector('#studyplan');
myForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  let data = new FormData(myForm);
  const wrap = document.querySelector('main');
  let htmlContent = '<grid id="table" class="plan">';
  htmlContent
  let gtc = '';
  for(let i = 0; i < data.get('day'); i++){
    htmlContent += `<div class = "plan__name">` + (i+1) + ` Mounth<button class="btn__add">+</button></div>`;
    gtc += '1fr ';
  }
  htmlContent += '</grid>'
  wrap.innerHTML = htmlContent;
  document.querySelector('#table').style.gridTemplateColumns = gtc;
  wrap.classList.add('todoList')
  const contentJava = [['Освоить синтаксис языка Java','Научиться писать понятный код','Освоить понятия SQl'],['написать маленькие Java приложения','Шаблоны проектирования','Читать логи, дебажить'],['Разработка маленького Spring приложения','Подключение SQL','Изучить запросы']];
  const contentC = [[' Введение в С#','Основные понятия ООП','Наследование и полиморфизм'],['Интерфейсы','Делегаты и события','Управление памятью и указатели '],['Потоки','LINQ to Objects','Рефлексия']];
  const arr = document.querySelectorAll('.plan__name');
  for(let i = 0; i < data.get('day'); i++){
    let text = ''
    if (data.get('language')=='Java'){
      for (let k = 0; k < 3; k++){
        text = '<p class = "plan__content">'+contentJava[i][k]+'</p>';
        arr[i].innerHTML += `<div class = "plan__allContent">`+text+`<button class="btn__delete">-</button></div>`;
      }
  }
    else{
      for (let k = 0; k < 3; k++){
        text = '<p class = "plan__content">'+contentC[i][k]+'</p>';
        arr[i].innerHTML += `<div class = "plan__allContent">`+text+`<button class="btn__delete">-</button></div>`;
      }
  }
}}
)