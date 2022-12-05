function bark (name, weight) {
    if(weight > 20) {
    console.log(name + ' says Woof');
} else {
console.log(name + ' says woof')
}

}


bark('river', '20');


//what shall we wear?

function whatShallWear(temp) {
if (temp < 60) {
    console.log('wear a jacket');
} else if (temp < 70){
    console.log('wear a sweater');
} else {
    console.log('wear t-shirt')
}
};

whatShallWear(60);
whatShallWear(50);
whatShallWear(70);


function doIt(param) {
param = 2;
}
let test = 1;
doIt(test);
console.log(test);


let age = 7;

function addOne(x) {
x += 1;
console.log(x);

}
addOne(age)


function bake(degrees) {
let message;

if (degrees > 500) {
    message = 'I`m not a nuclear reactor';
} else if (message < 100) {
    message = 'I`m not a refrigerator';
} else {
    message = 'That`s a very comfortable temperature for me';
}
return message;

};
let status = bake(350);
console.log(status);


function calculateArea (r) {
let area;
if (r <= 0) {
    return 0;
} else {
    area = Math.PI * r * r;
    return area;
}
}

let radius = 5.2;
let theArea = calculateArea(radius);
console.log('The area is: ' + theArea);



function clunk(times) {
let num = times;
while (num > 0) {
    display('clunk');
    num = num - 1;
}
}

function thingamajig(size) {
let facky = 1;
clunkCounter = 0;
if (size == 0) {
    display('clank');   
} else if (size == 1) {
    display('thunk');
} else {
    while (size > 1) {
        facky *= size;
        size -= 1;
    }
    clunk(facky);
}
}

function display(output) {
console.log(output);
clunkCounter += 1;
}
let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);