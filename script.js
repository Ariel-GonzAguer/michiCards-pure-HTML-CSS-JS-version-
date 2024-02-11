// endPoints
const urlCATAAS = 'https://cataas.com/cat/gif'

// Intro
setTimeout(() => {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('homePageCard').style.display = 'grid';
  getGif();
}, 1000); //CAMBIAR AL FINAL A 5000

// get gif for Home Page Card
async function getGif() {
  try {
    const response = await fetch(urlCATAAS);
    if (response.ok) {
      document.getElementById('catApiGif').src = response.url;
    }
  } catch (error) {
    console.error(error)
  }
}

// portpholio redirection
document.getElementById('contact').addEventListener('click', () => {
  try {
    alert('You are being redirected to my portfolio where you can see a little more of my work and contact me. Thanks for Playing!');
    window.open('https://diosdenada.github.io/portpholio/');
  } catch (error) {
    console.error(error);
  }
})

// donation redirection
document.getElementById('donate').addEventListener('click', () => {
  try {
    alert('You are being redirected to a Pay Pal profile. Thanks for you dontion!');
    window.open('https://paypal.me/ariegonzaguer?country.x=CR&locale.x=es_XC')
  } catch (error) {
    console.error(error);
  }
})