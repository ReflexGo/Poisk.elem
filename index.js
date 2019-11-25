// const nodes = document.body.childNodes;

// const arrNodes = Array.from(document.body.childNodes);

// console.log(nodes);
// console.log(arrNodes);


// // 1 способ выбора элемента text
// // arrNodes.map((item)=>{
// //     console.log(item);
// // })

// //2 способ выбор элемента text
// arrNodes.forEach(function(item){
//     console.log(item);
// })



// const parent = document.body.parentElement;
// console.log(parent);



// const item = document.body.firstElementChild;
// console.log(item);

// const item2 = document.body.children[1];
// console.log(item2);

// const item3 = document.body.children[1].firstElementChild;
// console.log(item3);



// const item = document.body.firstElementChild.firstElementChild;
// console.log(item);

// const item2 = document.body.firstElementChild.lastElementChild;
// console.log(item2);

// const item3 = document.body.children[1];
// console.log(item3);

// const item4 = document.body.children[1].firstElementChild.firstElementChild;
// console.log(item4);



// const header = document.getElementById("myHeader");
// console.log(header);

// const num = document.getElementsByClassName("num");
// console.log(num);

// const items = document.getElementsByTagName("li");
// console.log(items);

// const selector = document.querySelectorAll("li");
// console.log(selector);



var childNodes = document.body.childNodes;

for (var i = 0; i < childNodes.length; i++){
    console.log("тип" + childNodes[i].nodeType);
    console.log("Имя" + childNodes[i].nodeName);
}