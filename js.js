var clicks = 0;
  function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  if (clicks==6){
    alert(`Молодец! Задание выполнено! Допущено ${click} ошибок. Нажми на появившуюся внизу кнопку, чтобы перейти на следующий этап`);
    document.getElementById("str").style.display = 'block';
  }
  else if (clicks>=6){
    document.getElementById("str").style.display = 'block';
  } 
};

var click = 0;
  function onClickk() {
  click += 1;
  document.getElementById("click").innerHTML = click;
};




const el1 = document.body.querySelector('.volk')

el1.addEventListener('click', () => {
  el1.className = 'volkk'

})


const el2 = document.body.querySelector('.rabbit')

el2.addEventListener('click', () => {
  el2.className = 'rabbitt'

})

const el3 = document.body.querySelector('.cat')

el3.addEventListener('click', () => {
  el3.className = 'element-final'
})

const el4 = document.body.querySelector('.lisa')

el4.addEventListener('click', () => {
  el4.className = 'lisaa'

})

const el5 = document.body.querySelector('.petuh')

el5.addEventListener('click', () => {
  el5.className = 'element-final'

})

const el6 = document.body.querySelector('.mouse')

el6.addEventListener('click', () => {
  el6.className = 'mousee'

})

const el7 = document.body.querySelector('.pig')

el7.addEventListener('click', () => {
  el7.className = 'hh'

})

const el8 = document.body.querySelector('.frog')

el8.addEventListener('click', () => {
  el8.className = 'frogg'

})

const el9 = document.body.querySelector('.beer')

el9.addEventListener('click', () => {
  el9.className = 'beeer'

})
