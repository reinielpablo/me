const colors = ['#2196f3', '#e91e63', '#ff3b3b', '#74ff1d'];
const btn__circle = document.querySelectorAll('.btn__circle');
const btn__square = document.querySelectorAll('.btn__square');
const btn__triangle = document.querySelectorAll('.btn__triangle');
const btn__add = document.querySelectorAll('.btn__add');
const btn__menu = document.querySelector('.btn__menu');
const btn__submit = document.querySelector('.user__btn');
const input__user = document.querySelector('#username');
const input__pass = document.querySelector('#password');
const btn__user = document.querySelector('.btn__user');
let bool__square = true;
let bool__circle = false;
let bool__triangle = false;
let bool__add = false;

//init//
input__user.value = '';
//

function color255() {
  const colr = Math.trunc(Math.random() * 255) + 1;
  const colg = Math.trunc(Math.random() * 255) + 1;
  const colb = Math.trunc(Math.random() * 255) + 1;
  const cola = Math.trunc(Math.random() * 255) + 1;
  return `rgba(${colr}, ${colg}, ${colb}, ${cola})`;
}
//
function createSquare() {
  const section = document.querySelector('body');
  const square = document.createElement('span');
  const shp__icon = document.createElement('ion-icon');

  var size = Math.random() * 75;

  square.style.width = 20 + size + 'px';
  square.style.height = 20 + size + 'px';
  shp__icon.style.fontSize = square.style.top =
    Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';
  shp__icon.style.fontSize = 20 + size + 'px';

  //Choose colors from array
  //const bg = colors[Math.floor(Math.random() * colors.length)];

  //Randomize colors
  const bg = color255();

  square.style.background = 'none';

  if (bool__square) {
    shp__icon.name = 'square-outline';
  } else if (bool__circle) {
    shp__icon.name = 'ellipse-outline';
  } else if (bool__triangle) {
    shp__icon.name = 'triangle-outline';
  } else if (bool__add) {
    shp__icon.name = 'add-outline';
  }

  square.style.color = bg;
  square.appendChild(shp__icon);
  section.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 2050);
}
///Main

btn__circle.forEach(function (el) {
  el.addEventListener('click', function () {
    //btn__circle.textContent = 'Working';
    bool__square = false;
    bool__circle = true;
    bool__add = false;
    bool__triangle = false;
  });
});

btn__square.forEach(function (el) {
  el.addEventListener('click', function () {
    //btn__circle.textContent = 'Working';
    bool__square = true;
    bool__circle = false;
    bool__add = false;
    bool__triangle = false;
  });
});
btn__triangle.forEach(function (el) {
  el.addEventListener('click', function () {
    //btn__circle.textContent = 'Working';
    bool__square = false;
    bool__circle = false;
    bool__add = false;
    bool__triangle = true;
    console.log('CLICK');
  });
});
btn__add.forEach(function (el) {
  el.addEventListener('click', function () {
    //btn__circle.textContent = 'Working';
    bool__square = false;
    bool__circle = false;
    bool__add = true;
    bool__triangle = false;
  });
});
// btn__square.addEventListener('mouseover', _ => {
//   btn__square.classList.add('btn__mouseOver');
//   document.querySelector('.btn__mouseOver').style.background = color255();
// });

// btn__square.addEventListener('mouseout', _ => {
//   btn__square.classList.remove('btn__mouseOver');
//   btn__square.removeAttribute('style');
// });

// btns.forEach(function (el) {
//   el.addEventListener('mouseover', _ => {
//     el.classList.add('btn__mouseOver');
//     document.querySelector('.btn__mouseOver').style.color = color255();
//     document.querySelector('.btn__mouseOver').style.textDecoration = `none`;
//   });
// });
const randColor = color255();

document
  .querySelector('.navi__area')
  .addEventListener('mouseover', function (e) {
    e.preventDefault();

    //MAtching Strategy
    if (e.target.classList.contains('btn__')) {
      e.target.classList.add('btn__mouseOver');
      document.querySelector('.btn__mouseOver').style.color = color255();
      document.querySelector('.btn__mouseOver').style.textDecoration = `none`;
    }
  });

document
  .querySelector('.navi__area')
  .addEventListener('mouseout', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('btn__')) {
      e.target.classList.remove('btn__mouseOver');
      e.target.removeAttribute('style');
    }
  });

document
  .querySelector('.navi__area__menu')
  .addEventListener('mouseover', function (e) {
    e.preventDefault();

    //MAtching Strategy
    if (e.target.classList.contains('btn__')) {
      e.target.classList.add('btn__mouseOver');
      document.querySelector('.btn__mouseOver').style.color = color255();
      document.querySelector('.btn__mouseOver').style.textDecoration = `none`;
    }
  });

document
  .querySelector('.navi__area__menu')
  .addEventListener('mouseout', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('btn__')) {
      e.target.classList.remove('btn__mouseOver');
      e.target.removeAttribute('style');
    }
  });

document.querySelectorAll('.navi__area').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    let shapeIcon = '';
    let objShape = '';
    const targetShape = e.target.classList;

    if (e.target.classList.contains('btn__square')) {
      shapeIcon = '.back__icon__square';
    } else if (e.target.classList.contains('btn__circle')) {
      shapeIcon = '.back__icon__circle';
    } else if (e.target.classList.contains('btn__triangle')) {
      shapeIcon = '.back__icon__triangle';
    } else if (e.target.classList.contains('btn__add')) {
      shapeIcon = '.back__icon__add';
    }
    console.log(shapeIcon);
    objShape = document.querySelector(shapeIcon);
    objShape.style.animation = `animate-back__icon 1.25s`;
    objShape.style.color = document.querySelector(
      '.btn__mouseOver'
    ).style.color;

    setTimeout(function () {
      objShape.style.animation = null;
      objShape.style.color = null;
    }, 1250);
  });
});

let btn__menu__toggle = true;
btn__menu.addEventListener('click', function () {
  if (btn__menu__toggle) {
    document.querySelector('.bar__menu').style.display = 'flex';
    document.querySelector('.btn__menu').style.transform = 'rotate(-270deg)';
    document.querySelector('.navi__area__menu').style.animation =
      'clipIn 0.25s linear';
    document.querySelector('.user__login').style.top = '250px';
    btn__menu.style.color = '#fff';
  } else {
    document.querySelector('.btn__menu').style.transform = 'rotate(0deg)';
    document.querySelector('.navi__area__menu').style.animation =
      'clipOut 0.25s linear';

    setTimeout(() => {
      document.querySelector('.user__login').style.top = '50px';
      document.querySelector('.bar__menu').style.display = 'none';
    }, 250);
  }
  btn__menu__toggle = !btn__menu__toggle;
});

const btn__user__icon = document.querySelector('.btn__user__icon');
const btn__user__text = document.querySelector('.btn__user__text');
btn__submit.addEventListener('click', function () {
  const user = input__user.value;
  const pass = input__pass.value;

  if (user === '' || pass === '') {
    alert('Missing input. Try again.');
    input__pass.value = '';
    return -1;
  }
  if (userNameList.hasOwnProperty(user)) {
    if (userNameList[user] === pass) {
      console.log('ok');
      const userNameString = btn__user__text.textContent;
      btn__user__icon.style.transition = '0.5s ease-in';
      btn__user__text.style.transition = '0.5s ease-in';
      btn__user__icon.style.transform = 'translateX(200%)';
      // console.log(userNameString.slice(1));
      setTimeout(() => {
        btn__user__text.style.clipPath = 'inset(0% 0% 0% 100%)';
      }, 500);

      setTimeout(() => {
        btn__user__icon.style.transform = 'translateX(-5%)';
        btn__user__text.style.clipPath = 'inset(0% 0% 0% 0%)';
        btn__user__text.textContent = `Hi, ${user}`;
      }, 1500);
      clipUserLogin();
      // console.log(btn__user.textContent[0] + ` ${user}`);
    } else {
      alert('Incorrect password. Try again.');
      input__pass.value = '';
    }
  } else {
    alert('Username not found.');
  }
});
const user__login = document.querySelector('.user__login');

function clipUserLogin() {
  //
  user__login.style.transition = '1s ease-in';
  user__login.style.clipPath = 'inset(0% 0% 0% 0%)';
  user__login.style.transform = 'translateY(30vh)';
  setTimeout(() => {
    user__login.style.clipPath = 'inset(0% 0% 75% 0%)';
  }, 50);
}
setInterval(createSquare, 150);
