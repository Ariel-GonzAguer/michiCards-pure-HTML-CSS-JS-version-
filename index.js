// Intro
setTimeout(() => {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('homePageCard').style.display = 'grid';
  getGif();
}, 5000);

// get gif for Home Page Card
/* endPoint */
const urlCATAAS = 'https://cataas.com/cat/gif';

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
    window.open('https://ariegonzaguer.netlify.app/');
  } catch (error) {
    console.error(error);
  }
})

// donation redirection
document.getElementById('donate').addEventListener('click', () => {
  try {
    alert('You are being redirected to a Pay Pal profile. Thanks for you donation!');
    window.open('https://paypal.me/ariegonzaguer?country.x=CR&locale.x=es_XC')
  } catch (error) {
    console.error(error);
  }
})
