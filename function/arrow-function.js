// Arrow function syntax 
let fun = (arg1, arg2, argN) => expression;

// Это создаёт функцию func, которая принимает аргументы 
// arg1..argN, затем вычисляет expression в правой части с 
// их использованием и возвращает результат.

// Aceasta e versiune scurta a sintaxei: 

let func = function(arg1, arg2, argN){
    return expression;
}; 

// Exemple

let sum = (a,b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1,2)); 

// Если у нас только один аргумент, то круглые скобки вокруг параметров можно опустить, сделав запись ещё короче:
let double = n => n * 2;
// egal cu versiunea: 
// let double = function(n){ return n * 2}
alert(double(3));

// Если аргументов нет, круглые скобки будут пустыми, но они должны присутствовать:

let sayHi = () => alert("Hello");

sayHi();

//Стрелочные функции можно использовать так же, как и Function Expression.
//Например, для динамического создания функции:

let age = prompt("Cati ani ai?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Ciao");

welcome();


// Exercitii: Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

ask(
    "Sunteti de acord?",
    () => alert("De acord"),
    () => alert("Anulat")
);

