// ans1

// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red ";
// document.querySelector('body').append(para1);

// para1.classList.add("red");

// ans2

// let heading= document.createElement('h2');
// heading.innerText =" I'm a blue"
// document.querySelector("body").append(heading);

// heading.classList.add("blue")

// ans 3


let div1 = document.createElement('div');
let h2 = document.createElement("h2");
let para2 =document.createElement("p");

h2.innerText ="I'm in a div"
para2.innerText ="Me To";

div1.append(h2);
div1.append(para2);

div1.classList.add("pink")
document.querySelector("body").prepend(div1);
