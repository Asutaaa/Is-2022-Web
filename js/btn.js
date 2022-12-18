document.addEventListener('click', function(evt){
  if(evt.target.matches('.btn__add')){
    evt.preventDefault();
    add__form.className = 'plan_add_form_yes';
    let el = evt.target;
    let cont = el.parentElement.parentElement;
    let add__plan = document.querySelector('#promt_input');
    add__plan.addEventListener('submit', function(evt_sub){
      evt_sub.preventDefault();
      let data = new FormData(add__plan);
      console.log(data.get('add_plan'));
      let newNode = document.importNode(plan_template.content, true);
      newNode.querySelector('p.plan__content').textContent = data.get('add_plan');
      cont.appendChild(newNode);
      newNode = null;
      add__form.className = 'plan_add_form_no';
    }, {once:true, passive:false,});
  }
  if(evt.target.matches('.btn__delete')){
    evt.target.parentElement.remove();
  }
})