"use strict"; //let const 
var check_card = [3,2,4,1,4,1,3,2];
var cards = document.getElementsByClassName('card');
var opened_cards = [];
var opened_cards_pos = [];
var check = 0;

cards[0].addEventListener("click", function() {
    if (opened_cards.length < 2) {
        cards[0].style.background = "url(cards/3.jpg)";
        cards[0].style.backgroundSize = "contain";
        opened_cards.push(check_card[0]);
        opened_cards_pos.push(0);
        if (opened_cards.length == 2) {
            if (opened_cards[0] == opened_cards[1]) {
                let timerId = setTimeout(function() { 
                    cards[opened_cards_pos[0]].style.background = "none";
                    cards[opened_cards_pos[1]].style.background = "none";
                    opened_cards.length = 0;
                    opened_cards_pos.length = 0;
                }, 1000);
                check++;
            }
            else {
                let timerId = setTimeout(function() {
                    cards[opened_cards_pos[0]].style.background = "url(cards/b.jpg)";
                    cards[opened_cards_pos[1]].style.background = "url(cards/b.jpg)";
                    opened_cards.length = 0;
                    cards[opened_cards_pos[0]].style.backgroundSize = "contain";
                    cards[opened_cards_pos[1]].style.backgroundSize = "contain";
                    opened_cards_pos.length = 0;
                }, 1000);
            }
        }
            
    }
    let timerId = setTimeout( function() { if (check == 4) {
        alert("Вы выиграли!");
        }
    }, 1000);
});

cards[1].addEventListener("click", function() {
    if (opened_cards.length < 2) {
        cards[1].style.background = "url(cards/2.jpg)";
        cards[1].style.backgroundSize = "contain";
        opened_cards.push(check_card[1]);
        opened_cards_pos.push(1);
        if (opened_cards.length == 2) {
            if (opened_cards[0] == opened_cards[1]) {
                let timerId = setTimeout(function() { 
                    cards[opened_cards_pos[0]].style.background = "none";
                    cards[opened_cards_pos[1]].style.background = "none";
                    opened_cards.length = 0;
                    opened_cards_pos.length = 0;
                }, 1000) ;
                check++;
            }
            else {
                let timerId = setTimeout(function() {
                    cards[opened_cards_pos[0]].style.background = "url(cards/b.jpg)";
                    cards[opened_cards_pos[1]].style.background = "url(cards/b.jpg)";
                    opened_cards.length = 0;
                    cards[opened_cards_pos[0]].style.backgroundSize = "contain";
                    cards[opened_cards_pos[1]].style.backgroundSize = "contain";
                    opened_cards_pos.length = 0;
                }, 1000);
            }
        
        }
    }
    let timerId = setTimeout( function() { if (check == 4) {
        alert("Вы выиграли!");
        }
    }, 1000);
});

cards[2].addEventListener("click", function() {
    if (opened_cards.length < 2) {
        cards[2].style.background = "url(cards/4.jpg)";
        cards[2].style.backgroundSize = "contain";
        opened_cards.push(check_card[2]);
        opened_cards_pos.push(2);
        if (opened_cards.length == 2) {
            if (opened_cards[0] == opened_cards[1]) {
                let timerId = setTimeout(function() { 
                    cards[opened_cards_pos[0]].style.background = "none";
                    cards[opened_cards_pos[1]].style.background = "none";
                    opened_cards.length = 0;
                    opened_cards_pos.length = 0;
                }, 1000) ;
                check++;
            }
            else {
                let timerId = setTimeout(function() {
                    cards[opened_cards_pos[0]].style.background = "url(cards/b.jpg)";
                    cards[opened_cards_pos[1]].style.background = "url(cards/b.jpg)";
                    opened_cards.length = 0;
                    cards[opened_cards_pos[0]].style.backgroundSize = "contain";
                    cards[opened_cards_pos[1]].style.backgroundSize = "contain";
                    opened_cards_pos.length = 0;
                }, 1000);
            }
        }
        
    }
   let timerId = setTimeout( function() { if (check == 4) {
        alert("Вы выиграли!");
        }
    }, 1000);
});

cards[3].addEventListener("click", function() {
    if (opened_cards.length < 2) {
        cards[3].style.background = "url(cards/1.jpg)";
        cards[3].style.backgroundSize = "contain";
        opened_cards.push(check_card[3]);
        opened_cards_pos.push(3);
        if (opened_cards.length == 2) {
            if (opened_cards[0] == opened_cards[1]) {
                let timerId = setTimeout(function() { 
                    cards[opened_cards_pos[0]].style.background = "none";
                    cards[opened_cards_pos[1]].style.background = "none";
                    opened_cards.length = 0;
                    opened_cards_pos.length = 0;
                }, 1000) ;
                check++;
            }
            else {
                let timerId = setTimeout(function() {
                    cards[opened_cards_pos[0]].style.background = "url(cards/b.jpg)";
                    cards[opened_cards_pos[1]].style.background = "url(cards/b.jpg)";
                    opened_cards.length = 0;
                    cards[opened_cards_pos[0]].style.backgroundSize = "contain";
                    cards[opened_cards_pos[1]].style.backgroundSize = "contain";
                    opened_cards_pos.length = 0;
                }, 1000);
            }
        }
    }
   let timerId = setTimeout( function() { if (check == 4) {
        alert("Вы выиграли!");
        }
    }, 1000);
});

cards[4].addEventListener("click", function() {
    if (opened_cards.length < 2) {
        cards[4].style.background = "url(cards/4.jpg)";
        cards[4].style.backgroundSize = "contain";
        opened_cards.push(check_card[4]);
        opened_cards_pos.push(4);
        if (opened_cards.length == 2) {
            if (opened_cards[0] == opened_cards[1]) {
                let timerId = setTimeout(function() { 
                    cards[opened_cards_pos[0]].style.background = "none";
                    cards[opened_cards_pos[1]].style.background = "none";
                    opened_cards.length = 0;
                    opened_cards_pos.length = 0;
                }, 1000) ;
                check++;
            }
            else {
                let timerId = setTimeout(function() {
                    cards[opened_cards_pos[0]].style.background = "url(cards/b.jpg)";
                    cards[opened_cards_pos[1]].style.background = "url(cards/b.jpg)";
                    opened_cards.length = 0;
                    cards[opened_cards_pos[0]].style.backgroundSize = "contain";
                    cards[opened_cards_pos[1]].style.backgroundSize = "contain";
                    opened_cards_pos.length = 0;
                }, 1000);
            }
        }
        
    }
   let timerId = setTimeout( function() { if (check == 4) {
        alert("Вы выиграли!");
        }
    }, 1000);
});

cards[5].addEventListener("click", function() {
    if (opened_cards.length < 2) {
        cards[5].style.background = "url(cards/1.jpg)";
        cards[5].style.backgroundSize = "contain";
        opened_cards.push(check_card[5]);
        opened_cards_pos.push(5);
        if (opened_cards.length == 2) {
            if (opened_cards[0] == opened_cards[1]) {
                let timerId = setTimeout(function() { 
                    cards[opened_cards_pos[0]].style.background = "none";
                    cards[opened_cards_pos[1]].style.background = "none";
                    opened_cards.length = 0;
                    opened_cards_pos.length = 0;
                }, 1000) ;
                check++;
            }
            else {
                let timerId = setTimeout(function() {
                    cards[opened_cards_pos[0]].style.background = "url(cards/b.jpg)";
                    cards[opened_cards_pos[1]].style.background = "url(cards/b.jpg)";
                    opened_cards.length = 0;
                    cards[opened_cards_pos[0]].style.backgroundSize = "contain";
                    cards[opened_cards_pos[1]].style.backgroundSize = "contain";
                    opened_cards_pos.length = 0;
                }, 1000);
            }
        }
    }
    let timerId = setTimeout( function() { if (check == 4) {
        alert("Вы выиграли!");
        }
    }, 1000);
});

cards[6].addEventListener("click", function() {
    if (opened_cards.length < 2) {
        cards[6].style.background = "url(cards/3.jpg)";
        cards[6].style.backgroundSize = "contain";
        opened_cards.push(check_card[6]);
        opened_cards_pos.push(6);
        if (opened_cards.length == 2) {
            if (opened_cards[0] == opened_cards[1]) {
                let timerId = setTimeout(function() { 
                    cards[opened_cards_pos[0]].style.background = "none";
                    cards[opened_cards_pos[1]].style.background = "none";
                    opened_cards.length = 0;
                    opened_cards_pos.length = 0;
                }, 1000) ;
            }
            else {
                let timerId = setTimeout(function() {
                    cards[opened_cards_pos[0]].style.background = "url(cards/b.jpg)";
                    cards[opened_cards_pos[1]].style.background = "url(cards/b.jpg)";
                    opened_cards.length = 0;
                    cards[opened_cards_pos[0]].style.backgroundSize = "contain";
                    cards[opened_cards_pos[1]].style.backgroundSize = "contain";
                    opened_cards_pos.length = 0;
                }, 1000);
                check++;
            }
        }
        
    }
   let timerId = setTimeout( function() { if (check == 4) {
        alert("Вы выиграли!");
        }
    }, 1000);
});

cards[7].addEventListener("click", function() {
    if (opened_cards.length < 2) {
        cards[7].style.background = "url(cards/2.jpg)";
        cards[7].style.backgroundSize = "contain";
        opened_cards.push(check_card[7]);
        opened_cards_pos.push(7);
        if (opened_cards.length == 2) {
            if (opened_cards[0] == opened_cards[1]) {
                let timerId = setTimeout(function() { 
                    cards[opened_cards_pos[0]].style.background = "none";
                    cards[opened_cards_pos[1]].style.background = "none";
                    opened_cards.length = 0;
                    opened_cards_pos.length = 0;
                }, 1000) ;
                check++;
            }
            else {
                let timerId = setTimeout(function() {
                    cards[opened_cards_pos[0]].style.background = "url(cards/b.jpg)";
                    cards[opened_cards_pos[1]].style.background = "url(cards/b.jpg)";
                    opened_cards.length = 0;
                    cards[opened_cards_pos[0]].style.backgroundSize = "contain";
                    cards[opened_cards_pos[1]].style.backgroundSize = "contain";
                    opened_cards_pos.length = 0;
                }, 1000);
            }
        }
    }
    let timerId = setTimeout( function() { if (check == 4) {
        alert("Вы выиграли!");
        }
    }, 1000);
});