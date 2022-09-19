let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let btn = document.getElementById("btn"); //получаем кнопку скрыть/показать 

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isVisible){ //если кнопка показана 
        tg.MainButton.hide() //скрываем кнопку 
    }
    else{ //иначе
        tg.MainButton.show() //показываем 
    }
});

   let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
   btnED.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
      if (tg.MainButton.isActive){ //если кнопка показана 
         tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
         tg.MainButton.disable() //скрываем кнопку 
      }
      else{ //иначе
         tg.MainButton.setParams({"color": "#143F6B"}); //меняем цвет
         tg.MainButton.enable() //показываем 
      }
   });

   Telegram.WebApp.onEvent('mainButtonClicked', function(){
      tg.sendData("some string that we need to send"); 
      //при клике на основную кнопку отправляем данные в строковом виде
   });


let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем



// Скрытие кнопки при нажатии
var hidden =  false;

function action() {
   hidden = !hidden;
   if(hidden) {
      document.getElementById('toggler').style.visibility = 'hidden';
   } else {
      document.getElementById('toggler').style.visibility = 'visible';
   }
}

// document.querySelector('toggler').addEventListener('click', function action_two() {
//    var div = document.querySelector('div_plus_or_minus')
//    div.style.display = div.style.display === 'none' ? 'block' : 'none'
//  })

 function view(idDiv) {
   var v = document.getElementById(idDiv);
   if(v.style.display != 'block')
       v.style.display = 'block';
       
}