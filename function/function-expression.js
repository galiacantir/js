// --------------------------------
// --- Function Declaration 
// --------------------------------
function sayHi(){
    alert("Hello");
}

// --------------------------------------------
// Function Expression -  
// permite de creat o functie noua in orice expresie
// --------------------------------------------

let sayHi = function(){ // sozdati functiu i pomestiti eo v peremenuiu sayHi
    alert("Hello");
}


// putem copia functia in alta variabila

function sayHi(){ // 1. cream functia
    alert("Hello");
}

//let func = sayHi; // 2. o copiem

func();
sayHi();

// putem folosi function expression pentru crearea sayHi in primul rand:

let sayHi = function(){
    alert("Hello");
};

let func = sayHi;



// ; - la sfarsit in function expression: 
//

function sayHi(){ //  function declaration
    //...
}


let sayHi = function(){ // function expression 
    // ... 
}; 
// in acest caz functia se creaza ca function(){...} in interiorul expresiei 
// let sayHi= ...; face parte din sintaxa expresiei si nu a functiei


// --------------------------------------------------
// --- Function callback
// --------------------------------------------------

// Scrim o functia ask(question, yes, no) cu parametrii:
// question - textul intrebarii, 
// yes - functia care se va chema daca raspunsul e da
// no - functia care se va chema daca raspunsul e nu


function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

function showOk(){
    alert("Sunteti de acord.");
}

function showCancel(){
    alert("Ati anulat cererea.");
}

// functiile showOk si showCancel - trimise ca argumente pentru functia ask

ask("Sunteti de acord?", showOk, showCancel);

// argumentele showOk / showCancel - se cheama function callback

// Putem rescrie exemplul dat prin Function Declaration

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

ask(
    "sunteti de acord?",
    function(){ alert("sunteti de acord");},
    function(){alert("nu sunteti de acord");}
);


// Exemple 1: Function Declaration vs Function Expression

let age = prompt("Cati ani aveti?", 18);
// in dependenta de conditii declaram functia
if (age < 18) {
    function welcome() {
        alert("Hello");
    } 
} else {
    function welcome() {
        alert("Hi");
    }
}

welcome(); 
// !!! ar trebui sa fie eroare, pentru ca function expression e in afara blocului
// !!! dar in console arata rezultatul. De ce???

// Exemple 2: 
let varsta = 16; 

if (age < 18){
    welcome();

    function welcome(){
        alert("Hello");
    }
    welcome();
} else {
    function welcome(){
        alert("Hi")
    }
}


welcome();


// Exemplul de mai sus cum ar trebui sa fie corect: 

let ageNew = prompt("Сколько Вам лет?", 18);

let come;

if (ageNew < 18) {

  come = function() {
    alert("Hello!");
  };

} else {

  come = function() {
    alert("Hi!");
  };

}

come(); // am schimbat numele functiei pentru ca welcome era deja declarata

// Exemplul de mai sus corect cu operatorul ?

let newAge = prompt("Cati aveti?", 18);

let wel = (newAge < 18)?
    function() { alert("Hello"); } : 
    function() {alert("Hi"); };

    wel(); // welcome has already declared
