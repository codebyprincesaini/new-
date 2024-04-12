// let smallImages = document.getElementsByClassName("oldImg");

// for (let i=0; i<smallImages.length; i++){
//     smallImages[i].src ="spiderman_img.png";
    
// }

// class ..

// let paragrah = document.getElementsByTagName("p");

// console.dir(paragrah[1]);


// class query selecter 

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector('#description'));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"))

// console.dir(document.querySelectorAll("div a"))



// class- mainipulating attributes .

// let img = document.querySelector('img');
// console.log(img);
// console.log(img.getAttribute('id'));
// console.log(img.setAttribute('id', 'spidermanImg'));

// let img = document.querySelector('img');

// console.dir(img.style);


// let heading = document.querySelector('h1');

// console.dir(heading.style.color ="green")

// let links = document.querySelectorAll('.box a');

// for(link of links){
//     link.style.color ="green";    //inline style
// }

//or

// for (let i=0; i<link.length; i++){
//     link[i].style.color ="yellow"
// }


// class  manipulating style 


// let img = document.querySelector('img');

// console.dir(img.classList);

// let heading = document.querySelector('h1');

// console.dir(heading.classList.add("green" , "underline"));

// console.dir(heading.classList);

// console.dir(heading.classList.remove("green")); 

// console.dir(heading.classList);

// console.dir(heading.classList.contains("green"));

// console.dir(heading.classList.toggle("green")); 

// console.dir(heading.classList);



// class- navigation 

// let h4 = document.querySelector('h4');

// console.log(h4.parentElement);

// console.log(h4.children);

// let box = document.querySelector('.box ');

// console.log(box.childElementCount);

// let ul = document.querySelector('ul');

// console.log(ul.childElementCount);

// console.log(ul.children);


// class- Adding Elements 


let paragraph = document.createElement('p');

// console.log(paragraph);

console.log(paragraph.innerText="Hi i am new p")



let body = document.querySelector('body');

console.log(body.appendChild(paragraph));

let box = document.querySelector('.box');

console.log(box.appendChild(paragraph));



let btn = document.createElement('button');

console.dir(btn)
btn.innerText="this is a new button"

console.log(box.appendChild(btn));

console.log(btn.append(" this is new text"));

console.log(paragraph.append(btn));
console.log(paragraph.append(" do not click this button"));


btn.innerHTML = "NEW BUTTON";

let p = document.querySelector('p');

console.log(p.insertAdjacentElement('beforebegin', btn))





