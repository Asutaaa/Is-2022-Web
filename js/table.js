const myForm = document.querySelector('#studyplan');
myForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  let data = new FormData(myForm);
  const wrap = document.querySelector('._todoList');
  document.querySelector('.hello').innerHTML += `<h3>Привет, `+data.get('name')+`.</h3>`;
  wrap.innerHTML = '<grid id="table" class="plan"></grid>';
  let gtc = '';
  for(let i = 0; i < data.get('day'); i++){
    let newNode = document.importNode(mounth.content, true);
    newNode.querySelector('p.plan__name_title_content').textContent = (i + 1) + ' Mounth';
    table.appendChild(newNode);
    gtc += '1fr ';
  }
  let addForm = document.importNode(plan_add.content, true);
  wrap.appendChild(addForm)
  document.querySelector('#table').style.gridTemplateColumns = gtc;
  wrap.classList.add('todoList')
  localStorage.setItem('name', data.get('name'));
  localStorage.setItem('day', data.get('day'));
  localStorage.setItem('language', data.get('language'));
  const contentJava = [['Освоить синтаксис языка Java','Научиться писать понятный код','Освоить понятия SQl'],['написать маленькие Java приложения','Шаблоны проектирования','Читать логи, дебажить'],['Разработка маленького Spring приложения','Подключение SQL','Изучить запросы']];
  const contentC = [[' Введение в С#','Основные понятия ООП','Наследование и полиморфизм'],['Интерфейсы','Делегаты и события','Управление памятью и указатели '],['Потоки','LINQ to Objects','Рефлексия']];
  const arr = document.querySelectorAll('.plan__name');
  for(let i = 0; i < data.get('day'); i++){
    let text = ''
    if (data.get('language')=='Java'){
      for (let k = 0; k < 3; k++){
        let newNode = document.importNode(plan_template.content, true);
        newNode.querySelector('p.plan__content').textContent = contentJava[i][k];
        arr[i].appendChild(newNode);
      }
  }
    else{
      for (let k = 0; k < 3; k++){
        let newNode = document.importNode(plan_template.content, true);
        newNode.querySelector('p.plan__content').textContent = contentC[i][k];
        arr[i].appendChild(newNode);
      }
  }
}}
)