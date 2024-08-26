// console.log("hello world");
// document.write("hi ")
// // var num = 15;
// var num =20;//can do redeclare
// num=40;//can do reaasign
// console.log(num);
// let a =10;
// // let a = 8; redeclare not allowed
// a =15// can do reassign
// document.write(a);
// console.log(a);


// const pi = 3.14;
// // const pi = 2; con not redeclare
// //pi=12; //can not reassign
// console.log(pi);

// //  b=1;
// // alert("b=" +a);
// // var b;

// let a1=8;
// let a2 = 8;
// let a3 = '8';
// console.log(a1+a2);
// console.log(8-8);
// console.log(a1*a2);
// console.log(a1/a2);
// console.log(a1%a2);
// console.log(a1==a2);
// console.log(a1===a1);
// console.log(a1===a3);
// console.log(a1!==a2);
// console.log(a1!= a2);
// console.log(a1&&a2);
// console.log(a2++,++a2,a2++,a2++,++a2,a2,a2--,a2--,--a2,--a2,a2);
// let p=1;
// let q=2;
// console.log((p===q) ? 'p' : 'q');
//day - 2 of js class
//let x=5;
// if(x>10){
//     console.log("x is greater than 10");

// }else{
//     console.log("x is less than or equal  to 10");
// }

// let d=prompt("enter day number");
// let dayname;
// switch(d<=7){
//     case d:
//         dayname="sunday";
//         break;
//         case d:
//         dayname="monday";
//         break;
//         case d:
//         dayname="tuesday";
//         break;
//         case d:
//         dayname="wednesday";
//         break;
//         case d:
//         dayname="thursday";
//         break;
//         case d:
//         dayname="friday";
//         break;
//         case d:
//         dayname="saturday";
//         break;
//         case 1:
//         dayname="sunday";
//         break;
//         default:
//             dayname="day not exist";
// }
// console.log(dayname);

// const a=5;
// for(let i=1;i<=a;i++){
// document.write("I am a programmer.");
// }
// let b=prompt("enter a number");
// while(b<=5){
//     console.log("hi");
//     b++;
// }
// do{
//    document.write("hi , I am do while loop");
//     b++;
// }while(b<=5);
//let n = prompt("enter number");
//let grade;
// switch(true){
//     case n>0&&n<=10:
//         grade="E";
//         break;
//         case n>=11 &&n<=20:   
//         grade="D";
//         break;
//         case n>=21&&n<=30:
//         grade="C";
//         break;
//         case n>=31&&n<=40:
//         grade="B";
//         break;
//         case n>=41 &&  n<=50:
//         grade="A";
//         break;
//         default : grade="no grade";
// }
// console.log(grade);
//string in Jva Script
// var string1 = "Prep";
// var string2 = "Bytes";
// var string3 = string1+ string2;
// console.log(string3);
// console.log(string1.concat(string2));
// console.log(string1.slice(1,4))
// console.log(string1.substring(1,4))
// // console.log(string1.slice(-3))
// console.log(string1.substring(-3));//not suported for 
// console.log(string1.replace('Prep','poor'));
// var str = "  My name is prit Chaihan , and My name    ";
// console.log(str.replaceAll('My' ,'I'))
// console.log(str.trim());
// console.log(str.split(","))
// var s1="Priti";
// console.log(s1.toUpperCase());
// console.log(s1.toLowerCase());
// console.log(s1.length)
// var input = "Hi Prepbytes";
// console.log(input.slice(3,13))

//array
//  var fruits = ["apple", "banana","grapes"];
// //  const n = [10,0,30,40,50];
// //  console.log(n.length + n.index(0))
// //  console.log(fruits.length);
// console.log(fruits);
//  fruits.push("Kiwi")
// console.log(fruits);


 //day - 3 javaScript
//  console.log(fruits.slice(0,1));
//  console.log(fruits.toString());//convert array to string 
// //  console.log(fruits.join("-"));//convert array to string with separator
//  console.log(fruits.pop());//remove last element
//  console.log(fruits);
//  console.log( "Shift "+fruits.shift() );//remove first element
//  console.log(fruits);
//  console.log(fruits.unshift("mango"));//add element at first
//  console.log(fruits);
//  console.log(fruits.includes("banana"));//check element exist
//  console.log(fruits.indexOf("banana"));//get index of element
//  console.log(fruits.lastIndexOf("banana"));//get last index of element
//  console.log(fruits.reverse());//reverse array
//  console.log(fruits);
//  console.log(fruits.sort());//sort array
//  console.log(fruits);

//map-map() method creates a new array with the results of calling a function for every array elemt
// const arr = [1,4,9,16];
//  const newarr=arr.map(x=> x*2)
// console.log(newarr);

// const arr1 = ["Jarvis","The","Developer"];
// const newarr1= arr1.filter(word => word.length > 3);
// console.log(newarr1);

// const a = (b)=>{
//     console.log("value of b is : "+b);
// }
// a(5);
//  function c(){
// console.log("hi")
// }
// c();
// const d = function(){
//     console.log(" Hi Rachna  , you are so f***g guy");
// }
//  d();

//  const A = (p,q)=>{
//     return p+q;
//  }
//  console.log(A(5,10));

// //  function showSMG(){
// //     alert("Hello Worls !");
// //  }
// //  showSMG();

//  const arr2 = [1,0,0,0,1,0,1,1,1,1,0];
//  let count1 =0;
//  let count2 = 0;
//  for(let i =0; i<arr2.length;i++){
//     if(arr2[i]===0){
//         count1++;
//     }else if(arr2[i] === 1){
//         count2++;
//     }
    
//  }
// //  console.log(count1);
// //  console.log(count2);

// //  const arr4 = [2,5,8,2,4,1,6,9];
// //  for(let i = 0;i<arr4.length;i++){
// //     if(arr4[i]%2===0){
// //         count1++;
        
// //     }else if(arr4[i]%2 !== 0){
// //        count2 ++;
// //     }
// //  }
// //  console.log("even no = " + count1);
// //  console.log("odd no = " + count2);

// //objects 
// var user = { name :"Rahul", profession:"Teacher", hobbies:["Reading","Dancing"]}
// console.log(user.name);

// function Car(make, model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// const car1 = new Car('Eagle', 'Talon TSI', 1993);
// console.log(car1);

//day-3 javaScript DOM - Document object model

// const str = "abc";
// console.log(...str);
// const body = {
//     height:174,
//     weight:64
// };
// const brain ={
//     iq:1,
// };
// const person ={
//     ...body,
//     ...brain,
//     name:'Duane',
//     age:23,
// };
// const rachna ={
//     ...person,
//     firstName: 'Samra',
//     lastName:'Ateeque',

// }
//console.log(rachna);
console.log("Hello world");

function changeText(){

    let res = document.getElementsByTagName('h1');
    res[0].innerText = "Hello Duniya";
    res[1].innerText ="Hello Duniya"
    //res[1].innerText="this is my new text."
}

function change(){
    let res1 = document.getElementById('p1');
    // let res2 =document.getElementsByClassName('b1');
    // res2.style.backgroundColor="blue"
    res1.innerHTML = "This is our second Paragraph"
    res1.style.backgroundColor="pink";
}
function imgChange(){
    let img = document.getElementById('img');
    img.src="img_girl.jpg";
}
function  changeDiv(){
    document.getElementById('box').style.flexDirection='row';
}
