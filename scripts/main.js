let myImage = document.querySelector('img');

myImage.onclick = function () {
    let MySrc = myImage.getAttribute('src');
    if (MySrc === 'images/kokomi.jpg') {
        myImage.setAttribute('src', 'images/jk_kokomi.jpg');
    }
    else if (MySrc === 'images/jk_kokomi.jpg') {
        myImage.setAttribute('src', 'images/kokomi2.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/kokomi.jpg');
    }
}

let myButton = document.querySelector('button');
let MyHeading = document.querySelector('h1');

function setWifeName() {
    let wifeName = prompt('请输入我的老婆名字。')
    if (!wifeName) {
        setWifeName();
    }
    else {
        localStorage.setItem('name', wifeName);
        MyHeading.textContent = '我的老婆' + wifeName;
    }
}

if (!localStorage.getItem('name')) {
    setWifeName();
}
else {
    let storedName = localStorage.getItem('name');
    MyHeading.textContent = '我的老婆' + storedName;
}

myButton.onclick = function () {
    setWifeName();
}