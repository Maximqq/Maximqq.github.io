let tg = window.Telegram.WebApp;

tg.expand() // разширение на весь экран 

tg.MainButton.textColor = "#023059"; //изменение цвета текста 
tg.MainButton.color = "#05AFF2"; // изменение цвета кнопки

let item = "Super!" // переменная которая будет отправлятся в телеграмм


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");



btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        tg.MainButton.show();
    }

});


// btn2.addEventListener("click", function(){
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 2!");
//         item = "2";
//         tg.MainButton.show();
//     }

// });


// btn3.addEventListener("click", function(){
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 3!");
//         console.log("Тут оно работает")
//         item = "3";
//         tg.MainButton.show();
//     }

// });


// btn4.addEventListener("click", function(){
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 4!");
//         item = "4";
//         tg.MainButton.show();
//     }

// });


// btn5.addEventListener("click", function(){
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 5!");
//         item = "5";
//         tg.MainButton.show();
//     }

// });


// btn6.addEventListener("click", function(){
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 6!");
//         item = "6";
//         tg.MainButton.show();
//     }

// });


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.getElementById("p");






// let usercard = document.getElementById("usercard"); //получаем блок usercard 

//    let profName = document.createElement('p'); //создаем параграф
//    profName.innerText = `${tg.initDataUnsafe.user.first_name}
//    ${tg.initDataUnsafe.user.last_name}
//    ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//    //выдем имя, "фамилию", через тире username и код языка
//    usercard.appendChild(profName); //добавляем 

//    let userid = document.createElement('p'); //создаем еще параграф 
//    userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
//    usercard.appendChild(userid); //добавляем

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

// usercard.appendChild(p);
