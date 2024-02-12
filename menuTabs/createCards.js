// endPoints
const urlTheCatApi = 'https://api.thecatapi.com/v1/images/search';

// get img from TheCatAPI
async function getImg() {
  try {
    const response = await fetch(urlTheCatApi);
    if (response.ok) {
      const jsonResponse = await response.json();
      const imgURL = jsonResponse[0]['url'];
      return imgURL;
    }
  } catch (error) {
    console.error(error)
  }
}

// create Card
let counterID = 0;

class michiCard {
  constructor(name, img, atributtes, agility, softness, evilness, goodness, velocity) {
    this._id = michiCard.incrementId(); // Asignar un ID único
    this._name = name;
    this._img = img;
    this._atributtes = atributtes;
    this._agility = agility;
    this._softness = softness;
    this._evilness = evilness;
    this._goodness = goodness;
    this._velocity = velocity;
  }

  static incrementId() {  // Método estático para incrementar el ID
    counterID++;
    return this._id = counterID++;
  }
}

let newMichiCard;
let michiCards = [];

async function collectInfoMichiCard() {
  try {
    if (document.getElementById('michiName').checkValidity()) {
      // e.preventDefault();
      const michiName = document.getElementById('michiName').value;
      const imgMichi = await getImg();
      const michiAtributtes =
        document.getElementById('atributtes').value === '' ? randomAtributtes() : document.getElementById('atributtes').value;
      const agilityStatValue = document.getElementById('agilityStat').value === '1' ? randomStats() : document.getElementById('agilityStat').value;
      const softnessStatValue = document.getElementById('softnessStat').value === '1' ? randomStats() : document.getElementById('softnessStat').value;
      const evilnessStatValue = document.getElementById('evilnessStat').value === '1' ? randomStats() : document.getElementById('evilnessStat').value;
      const goodnessStatValue = document.getElementById('goodnessStat').value === '1' ? randomStats() : document.getElementById('goodnessStat').value;
      const velocityStatValue = document.getElementById('velocityStat').value === '1' ? randomStats() : document.getElementById('velocityStat').value;

      newMichiCard = new michiCard(michiName, imgMichi, michiAtributtes, agilityStatValue, softnessStatValue, evilnessStatValue, goodnessStatValue, velocityStatValue);
      michiCards.push(newMichiCard);

      document.getElementById('newCard').style.display = 'grid';
      document.querySelector('main').style.display = 'none';

      console.log(newMichiCard)
    } else {
      window.alert('You need to write a name first!')
    }
  } catch (error) {
    console.error(error);
  }
}


async function createNewMichiCard() {
  document.getElementById('name').innerText = newMichiCard._name;
  document.getElementById('catApiIMG').src = newMichiCard._img;
  document.querySelector('#atributtesNew p').innerText = newMichiCard._atributtes;
  document.getElementById('agility').innerText = newMichiCard._agility;
  document.getElementById('softness').innerText = newMichiCard._softness;
  document.getElementById('evilness').innerText = newMichiCard._evilness;
  document.getElementById('goodness').innerText = newMichiCard._goodness;
  document.getElementById('velocity').innerText = newMichiCard._velocity;

  // 100 posibilidad en 1000
  if (Math.floor(Math.random() * 1000) > 950) {
    document.getElementById('name').innerHTML = `${newMichiCard._name} <i class="fa-solid fa-star-half-stroke"></i>`;
    document.getElementById('name').style.display = 'flex';
    document.getElementById('name').style.flexWrap = 'wrap';
    document.getElementById('name').style.alignItems = 'center';
    document.getElementById('newCard').style.border = '12px double black';
    document.getElementById('newCard').style.backgroundColor = 'red';

    //  posibilidad 1 de 1000
  } else if (Math.floor(Math.random() * 1000) === 666) {
    document.getElementById('name').style.color = 'pink';
    document.getElementById('name').innerHTML = `${newMichiCard._name} <i class="fa-solid fa-star"></i>`;
    document.getElementById('name').style.display = 'flex';
    document.getElementById('name').style.flexWrap = 'wrap';
    document.getElementById('name').style.alignItems = 'center';
    document.getElementById('newCard').style.backgroundColor = 'black';
    document.getElementById('newCard').style.border = '12px double white'
  }
}

// helpers
function randomAtributtes() {
  const options = [
    "The agile cat gracefully leaps from rooftop to rooftop, a shadowy acrobat in the moonlight. Its movements are a dance of precision and power.",

    "With a flick of its tail, the playful cat bats at dangling toys, its eyes bright with mischief. It pounces and tumbles, a whirlwind of energy.",

    "Nestled in a cozy bed, the contented cat dreams of chasing mice through fields of tall grass. Its gentle purrs fill the room with warmth.",

    "Perched on a windowsill, the curious cat watches the world outside with wide-eyed wonder. It yearns to explore beyond the glass barrier.",

    "The regal cat lounges in the sun, basking in its own magnificence. It exudes an aura of majesty, commanding respect with every graceful movement.",

    "Under the cover of darkness, the mysterious cat becomes a silent hunter, its sleek form gliding through the shadows with silent purpose."
  ];
  const randomAtributte = options[Math.floor(Math.random() * options.length)];
  return randomAtributte;
}

function randomStats() {
  return Math.floor(Math.random() * 100);
}


// eventListenner
// create and lunch new Michi Card //
document.getElementById('ready').addEventListener('click', async (e) => {
  e.preventDefault();
  await collectInfoMichiCard();
  createNewMichiCard()
});

// character count // 
document.getElementById('atributtes').addEventListener('input', (e) => {
  e.preventDefault();
  const charCount = document.getElementById('charCount');
  const text = document.getElementById('atributtes').value;
  const charLength = text.length;
  const maxLength = 124;

  if (charLength >= maxLength) {
    document.getElementById('atributtes').value = text.slice(0, maxLength);
  }

  charCount.textContent = `${charLength}/${maxLength + 1}`;
});


// local storage stuff
// Load instances and counterID value in localStorage //
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('michiCards')) {
        michiCards = JSON.parse(localStorage.getItem('michiCards'));
    }
    if (localStorage.getItem('counterID')) {
        counterID = parseInt(localStorage.getItem('counterID'));
    }
});

// save instances and counterID value in localStorage //
window.addEventListener('beforeunload', () => {
    localStorage.setItem('michiCards', JSON.stringify(michiCards));
    localStorage.setItem('counterID', counterID);
});
