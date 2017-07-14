var beetwen = 5;
var prize = 0;
var chances = 3;
var prizeRate = 1;
var game = true;

var ask = confirm("Чи бажаєте почати гру?");
if (ask == true) {
    var random = Math.floor((Math.random() * beetwen) + 0);
    var askNumber = prompt('Введіть число', );
} else {
    console.log("Сьогодні ви не виграли мільйон, а могли...");
    game = false;
}
while (game == true) {
    if (prize != 0) {
        ask = confirm("Вітаємо ви вгадали! Чи бажаєте продовжити гру?");
        if (ask == true) {
            chances = 3;
            prizeRate *= 3;
            beetwen *= 2;
            random = Math.floor((Math.random() * beetwen) + 0);
            askNumber = prompt('Введіть число', );
        } else {
            console.log("Дякуємо за гру, ваш виграш становить " + prize + "$");
            break;
        }
    }
    while (chances != 0) {
        if (chances == 3 && askNumber == random) {
            prize += (10 * prizeRate);
            break;
        } else if (chances == 2 && askNumber == random) {
            prize += (5 * prizeRate);
            break;
        } else if (chances == 1 && askNumber == random) {
            prize += (2 * prizeRate);
            break;
        } else {
            chances--;
            if (chances != 0) {
                askNumber = prompt('Не вгадали, залишилось ' + chances + ' спроби', );
            }
        }
    }
    while (chances == 0) {
        console.log("Ваш виграш - 0$");
        ask = confirm("Ви програли. Чи бажаєте зіграти ще раз?");
        if (ask == true) {
            beetwen = 5;
            prize = 0;
            chances = 3;
            prizeRate = 1;
            random = Math.floor((Math.random() * beetwen) + 0);
            askNumber = prompt('Введіть число', );
        } else {
            console.log("Сьогодні ви не виграли мільйон, а могли...");
            game = false;
            break;
        }
    }
}