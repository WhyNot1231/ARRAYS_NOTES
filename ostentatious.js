//Declaring an empty array
let arr=[];

//Declare and add elements (initializing the array)
let names=["John", "George", "Susan", "Alejandro"];

let runIt=function(){

    //outputs the whole array
    alert(names);

    //output ONE element from the array at the index provided
    alert(names[1]);

    //Used variables to grab and element and combine it with a string/other variables
    let thisGuy=names[3];
    let message=" is a good name.";

    alert(thisGuy + message);

};

//this function demonstrates the methods available to the array
let doThePush=function(){

    //ADDING FUNCTIONS

    //ADDS TO THE END
    alert(arr);
    arr.push("Mickey");
    alert(arr + " Element Number " + arr.length);
    arr.push("Donald", " Goofy", " Minnie", " Daisy", " Pluto ");
    alert(arr  + " Element Number = " + arr.length);

    //ADD ELEMENTS VIA PROMPT
    /*for(let i=0;1 < 7;i++){
        let answer=prompt("Please name the 7 Dwarfs");
        arr.push(answer);
    }
    alert(arr  + "The number of elements is " + arr.length);*/

    //Arrays can hold many different data types in one array
    let number=4;
    let answer=true;

    arr.push(number, answer);

    alert(arr);


};

let doTheUnshift=function(a, b, c){
    //ADDING FUNCTION
    //alert(names[2]);

    //ADDS TO THE BEGINNING
    names.unshift("Jerry");

    //alert(names);
    //alert(names[2]);

    names.unshift(a);
    names.unshift(b);
    names.unshift(c);

    //alert("First 3 unshifts = " + names);

    names.unshift(a, b, c);
    //alert("Next unshift =" + names);

    //TO CLEAR OUT AN ARRAY:
    arr=[];

    arr.push(a, c);
    arr.unshift(b);

    //alert(arr);
};

let doTheSplice=function(){
    doTheUnshift("James", "Maria", "Poindexter");

    //alert(names);
    //alert(arr);

    //THERE ARE 3 WAYS TO USE SPLICE AT ANY INDEX VALUE

    //METHOD 1: REMOVE 1 + ADD 1

    //REMOVES ONE ELEMENT AND ADDS ONE ELEMENT
    names.splice(3, 1, "Tom");
    arr.splice(3, 1, "Doug");

    //alert(names);
    //REMOVE MANY ELEMENTS AND ADD MANY ELEMENTS
    names.splice(3, 4, "Dick", "Harry", "Kevin");
    //alert(names);

    //METHOD 2, JUST REMOVE
    //alert(arr);
    arr.splice(1, 2);
    //alert(arr);
};

let doThePopNShift=function(){
    doTheSplice();

    //METHODS TO REMOVE ELEMENTS

    //REMOVES FROM THE END
    alert("Before pop: "+names);
    let lastName=names.pop();
    alert(lastName);
    alert("After pop: " + names);
    names.push(lastName);

    //REMOVES FROM THE BEGINNING
    alert("Before shift: "+names);
    let firstName=names.shift();
    alert(firstName);
    alert("After shift: " + names);


};