let colors = [];

fetch('https://627915ecd00bded55ae3f5c4.mockapi.io/api/v1/colors')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    colors = data;
  });

const body = document.getElementsByTagName('body');
const color = document.getElementById('color');

let index = 1;

setTimeout(function () {
  color.innerHTML = colors[0].code;
  document.body.style.backgroundColor = colors[0].code;
  console.log(color.innerHTML);
}, 500);


btn.addEventListener('click', function onClick() {

  document.body.style.backgroundColor = colors[index].code;
  color.innerHTML = colors[index].code;

  index = index >= colors.length - 2 ? 0 : index + 1;
});
