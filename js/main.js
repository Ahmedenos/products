let head = document.getElementById('head')
window.onscroll = function () {
    if (scrollY > 50 && scrollY < 623) {
        head.style.transform = 'translateY(-70px)'
    }
    else {
        head.style.transform = 'translateY(0px)';
        head.style.position = 'fixed';
        head.style.transitionDuration = '.7s';
        head.style.zIndex = '100'
    }
}
let body = document.body
let products = document.getElementById('all-products')
let right = document.getElementById('right')
let left = document.getElementById('left')
let mainImage = document.getElementById('image-main')
let myArry = ["images/r-11.jpg", "images/r-10.jpg", "images/r-4.jpg", "images/r-13.jpg", "images/r-12.jpg", "images/r-14.jpg"]
let myArry2 = ["images/one-3.jpg", "images/rr-2.jpg", "images/rr-3.jpg", "images/rr-4.jpg", "images/one-2.jpg", "images/one-4.jpg"]
let myArry3 = ["images/r-3.jpg", "images/r-6.jpg", "images/r-7.jpg", "images/r-10.jpg", "images/r-2.jpg", "images/r-1.jpg"]
//show elements
let firstImage = document.querySelectorAll('.one-img');
let container = document.getElementById('contian')
let tem = 0;
let counter = document.querySelectorAll('.count')

function showElements() {
    products.style.position = 'fixed';
    products.style.zIndex = '100';
    products.style.visibility = 'visible';
    container.style.overflow = 'visible';
    body.style.overflow = 'hidden'
}
for (let k = 0; k < counter.length; k++) {
    firstImage[k].onclick = function cout() {
        tem = k
        showElements()
        if (tem == 0) {
            mainImage.src = "images/one-3.jpg";
        }
        else if (tem == 1) {
            mainImage.src = myArry3[0];
        }
        //    else if(tem==2){
        //     mainImage.src=myArry[0]; 
        //    }
        //    else if(tem==3){
        //     mainImage.src=myArry[0]; 
        //    }
        //    else if(tem==4){
        //     mainImage.src=myArry[0]; 
        //    }
        else {
            mainImage.src = myArry[0];
        }
    }
}

// right Arrow
let i = 0
right.onclick = function rightArrow() {
    i++
    if (tem == 0) {
        mainImage.src = myArry2[i]
        if (i >= myArry.length - 1) {
            right.style.display = 'none';
            left.style.display = 'block'
        }
        else if (i >= 0) {
            left.style.display = 'block';
        }
    }
    else if (tem == 1) {
        mainImage.src = myArry3[i]
        if (i >= myArry3.length - 1) {
            right.style.display = 'none';
            left.style.display = 'block'
        }
        else if (i >= 0) {
            left.style.display = 'block';
        }
    }
    else {
        mainImage.src = myArry[i]
        if (i >= myArry.length - 1) {
            right.style.display = 'none';
            left.style.display = 'block'
        }
        else if (i >= 0) {
            left.style.display = 'block';
        }
    }
}
//left Arrow
left.onclick = function leftArrow() {
    if (tem == 0) {
        if (i <= 0) {
            i = 1
            left.style.display = 'none';
            right.style.display = 'block';
            mainImage.src = myArry2[0]
        }
        else {
            mainImage.src = myArry2[i]
        }
        i--
        if (i <= myArry.length) {
            right.style.display = 'block';
        }
    }
    else if (tem == 1) {
        if (i <= 0) {
            i = 1
            left.style.display = 'none';
            right.style.display = 'block';
            mainImage.src = myArry3[0]
        }
        else {
            mainImage.src = myArry3[i]
        }
        i--
        if (i <= myArry.length) {
            right.style.display = 'block';
        }
    }
    else {
        if (i <= 0) {
            i = 1
            left.style.display = 'none';
            right.style.display = 'block';
            mainImage.src = myArry[0]
        }
        else {
            mainImage.src = myArry[i]
        }
        i--
        if (i <= myArry.length) {
            right.style.display = 'block';
        }
    }

}

// btn Exit
let exit = document.getElementById('wrong')
exit.onclick = function exit() {
    products.style.zIndex = '-100';
    body.style.overflow = 'visible'
    products.style.visibility = 'hidden';

}

// testmonials
let person = document.getElementById('person1');
let imgPerson = document.getElementById('person-image');
let icons = document.querySelectorAll('.swap-icon')
let defination = document.getElementById('defination')
let oneDefination = document.getElementById('defination-one')
let mainDefination = document.getElementById('defination-main')
defination.innerText = mainDefination.innerText
icons[0].onclick = function () {
    imgPerson.src = "images/person-alt1.png";
    defination.innerText = oneDefination.innerText
    icons[0].style.color = '#ffc107';
    icons[1].style.color = '#212529'
    icons[2].style.color = '#212529'
}
icons[1].onclick = function () {
    imgPerson.src = "images/benjamin.png";
    defination.textContent = mainDefination.innerText
    icons[1].style.color = '#ffc107';
    icons[0].style.color = '#212529'
    icons[2].style.color = '#212529'
}
icons[2].onclick = function () {
    imgPerson.src = "images/person-2.jpg";
    defination.innerText = oneDefination.innerText
    icons[2].style.color = '#ffc107';
    icons[0].style.color = '#212529'
    icons[1].style.color = '#212529'
}