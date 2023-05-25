
document.body.style.backgroundColor='silver'
document.getElementById('title').style.color='green'
const h3Elements = document.querySelectorAll('h3');
h3Elements.forEach((h3) => {
  h3.style.textTransform = 'uppercase';
});