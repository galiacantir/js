
// ----- Declararea Functiei-----
function showMessage(){
    alert("Hello everybody!");
}

showMessage();
showMessage();


// --- Variabile locale----

function showMessage() {
    let message = "Hello, i'm JavaScript!"; // local variables

    alert(message);
}
    showMessage(); // Hello, i'm JavaScript!


alert(message); // va fi greseala pentru ca variabila este vizibila doar in interiorul functiei


// --- Variabile externe/ globale -----

/*let userName = "Andrei";

function showMessage(){
    let message = "Hello, " + userName;
    alert(message);
}

showMessage();*/


// Functia are acces la variabilele externe/globale, le poate schimba sensul/insemnatatea

let userName = "Eduard";
function showMessage() {
    userName = "Matei"; // schimbam declararea variabilei externe

    let message = "Hello, " + userName;
    alert(message);
}

alert(userName); // Eduard inaintea chemarii functiei

showMessage();
alert(userName);

// Variabila externa/globala functioneaza doar daca in interiorul functiei nu este exact aceeasi.
// daca 0 variabila cu acelasi nume este si in interiorul functiei atunci ea o blocheaza pe cea din exterior.


let nameUser = "Marian"; 
function showMessage(){
    let nameUser = "Liviu"; // declaram o variabila locala

    let message = "Hi, " + nameUser;
    alert(message);
}

//functia foloseste variabila locala
showMessage();
alert(nameUser);

// Variabilele globale: variabilele declarate in afara functiilor, sunt vazute de functii doar
// daca nu au acelasi nume



//---------------------------------------------------------------------
//      Parametrii functiei
//---------------------------------------------------------------------

// Exemplul 1

function showMessage(from, text){
    alert(from + ": " + text);
}

showMessage("Anna", "Hello!");
showMessage("Anna", "How are you?");

// Exemplul 2

function showMessage(from, text){
    from = "*" + from + "*";
    alert(from + ": " + text)
}
let from = "Anna";
showMessage(from, "hello");
//showMessage("Anna");

alert(from);
// Exemplul de mai sus: function showMessage e declarata cu 2 parametri,
// dupa care e chemata cu doua argumente: from si hello.

// parametru - este variabila care se afla intre parantezele rotunde la declararea functiei
// argument - e insemnatatea care  se da functiei la chemarea ei


// UNDEFINED

function showMessage(from, text = "no text"){
    alert ( from + ": " + text)
}
showMessage("Anna");

// Parametri alternativi undefined

function showMessage(text){
    if (text === undefined) {
        text = "no message";
    }
    alert(text);
}
showMessage();

// sau putem folosi operatorul || 

function showMessage(text){
    text = text || "empty message";
    //...
}

// NULL 

function showCount(count){
    alert(count ?? "necunoscut");
}

showCount(0); // 0
showCount(null); // necunoscut
showCount(); // necunoscut



//----------------------------------------------------
//      Return Function 
//----------------------------------------------------

function sum(a, b){
    return a + b;
}
let result = sum(1,2);
alert(result); // 3


// return - se poate afla in orice loc in interiorul functiei

function checkAge(age){
    if(age >= 18){
        return true;
    } else {
        return confirm ("Parintii au permis?");
    }
}


let age = prompt("Cati ani aveti?", 12);

if(checkAge(age) ){
    alert ( "Acces permis");
} else {
    alert ("Permis interzis");
}

// rezultatul funtiei cu un return gol sau fara el - e undefined

function showMovie(age){
    if(!checkAge(age) ){
        return;
    }

    alert("va arata filmul?");
}


//--------------------------------------------------------
// Alegerea numelui functiei
//--------------------------------------------------------

// Ex: get, calc, create, show, check ...


// Exercitii: 

// --- 1 --- 
// in ambele cazuri este undefined ? 

// --- 2 --- 
// Rescrie functia folosind operatorul ? sau || 

function checkAge(age){
    if (age > 18){
        return true;
    } else {
        return confirm("Parintii au permis?");
    }
}

// operatorul "?"

function checkAge(age){
    return (age > 18) ? true : confirm("Parintii au permis?");
}

// operatorul "||"

function checkAge(age){
    return(age > 18) || confirm("Parintii au permis?");
}


// --- 3 --- 

// prin if
function min(a, b){
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

min(2,5); // 2
min(3, -1); // -1
min(1,1); // 1


// prin operatorul ?
function min(a, b){
    return a < b ? a : b;
}

// --- 4 --- 

function pow(x, n) {
    let result = x;

    for(let i=1; i < n; i++){
        result *= x;
    }

    return result;
}

let x = prompt("x?", " ");
let n = prompt("n?", " ");

if(n < 1){
    alert(`${n}`);
} else {
    alert( pow(x,n));
}
