let myButton = document.querySelector('button');
let myImage = document.querySelector('img');

function changePicture() {
    let MySrc = myImage.getAttribute('src');
    let random = Math.floor(Math.random() * 100) % 64 + 1;
    // alert(random);
    myImage.setAttribute('src', 'images/' + random);
}

myImage.onclick = function () {
    changePicture();
}
myButton.onclick = function () {
    changePicture();
}

// let myButton = document.querySelector('button');
// let MyHeading = document.querySelector('h1');

// function setWifeName() {
//     let wifeName = prompt('请输入我的老婆名字。')
//     if (!wifeName) {
//         setWifeName();
//     }
//     else {
//         localStorage.setItem('name', wifeName);
//         MyHeading.textContent = '我的老婆' + wifeName;
//     }
// }

// if (!localStorage.getItem('name')) {
//     setWifeName();
// }
// else {
//     let storedName = localStorage.getItem('name');
//     MyHeading.textContent = '我的老婆' + storedName;
// }

// myButton.onclick = function () {
//     setWifeName();
// }