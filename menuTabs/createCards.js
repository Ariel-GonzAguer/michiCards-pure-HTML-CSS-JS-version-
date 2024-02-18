// endPoints
const urlTheCatApi = 'https://api.thecatapi.com/v1/images/search';

// get img from TheCatAPI
async function getImg() {
  // esta función al usarl el bucle while (true) se ejecutará continuamente hasta que se cumpla una condición específica o hasta que se produzca alguna acción para detenerlo. En este caso hasta que se cumpla la condición del tamaño de la img. Es MUY útil para llamadas a APIs con requrimientos.
  try {
    let imgURL;
    while (true) {
      const response = await fetch(urlTheCatApi);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (await jsonResponse[0]['width'] >= '700' && await jsonResponse[0]['height'] >= '1350') {
          imgURL = jsonResponse[0]['url'];
          break; // Salir del bucle si se cumple la condición
        }
      } else {
        throw new Error('Error al obtener la imagen');
      }
    }
    return imgURL;
  } catch (error) {
    console.error(error);
    return null; //
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
    } else {
      window.alert('You need to write a name first!')
    }
  } catch (error) {
    console.error(error);
  }
}


async function createNewMichiCard() {
  document.getElementById('name').innerText = newMichiCard._name;
  document.getElementById('catImg').style.backgroundImage = `url(${newMichiCard._img})`;
  document.getElementById('catImg').style.backgroundRepeat = 'no-repeat'; // Cambia el repeat
  document.getElementById('catImg').style.backgroundSize = 'cover';

  document.querySelector('#atributtesNew p').innerText = newMichiCard._atributtes;
  document.getElementById('agility').innerText = newMichiCard._agility;
  document.getElementById('softness').innerText = newMichiCard._softness;
  document.getElementById('evilness').innerText = newMichiCard._evilness;
  document.getElementById('goodness').innerText = newMichiCard._goodness;
  document.getElementById('velocity').innerText = newMichiCard._velocity;

  // 100 posibilidad en 1000
  if (Math.floor(Math.random() * 1000) > 976) {
    console.log('if');
    document.getElementById('name').innerHTML = `${newMichiCard._name} <i class="fa-solid fa-star-half-stroke"></i>`;
    document.getElementById('name').style.display = 'flex';
    document.getElementById('name').style.flexWrap = 'wrap';
    document.getElementById('name').style.alignItems = 'center';
    document.getElementById('newCard').style.border = '12px double black';
    document.getElementById('newCard').style.backgroundColor = 'red';

    //  posibilidad 1 de 1000
  } else if (Math.floor(Math.random() * 1000) === 6) {
    console.log('else if');
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
    `In the land of whiskers and purrs, there roamed a fearless feline known to all as ${document.getElementById('michiName').value}.`,
    `Once upon a time, in the realm of yarn and mice, ${document.getElementById('michiName').value} the Great prowled with silent steps and majestic poise.`,
    `Amidst the meadows of catnip and sunbeams, ${document.getElementById('michiName').value} reigned supreme, his regal presence commanding respect from all who beheld him.`,
    `In the heart of the enchanted forest, ${document.getElementById('michiName').value} the Magnificent roamed with an air of mystique and wonder.`,
    `From the shadows of the moonlit night emerged ${document.getElementById('michiName').value}, the valiant protector of his domain.`,
    `Beneath the starry skies, ${document.getElementById('michiName').value} the Brave embarked on daring adventures, his whiskers twitching with anticipation and excitement.`,
    `Through the labyrinth of alleyways and rooftops, ${document.getElementById('michiName').value} the Cunning stalked his prey with precision and stealth.`,
    `The old feline history, tells none were as legendary as ${document.getElementById('michiName').value} the Wise, guiding his disciples on the path to enlightenment.`,
    `As the sun dipped below the horizon, ${document.getElementById('michiName').value} the Regal ascended to his throne, his majestic presence casting a golden glow upon his subjects.`,
    `In the realm of dreams and moonbeams, ${document.getElementById('michiName').value} the Enigmatic danced with ethereal grace and otherworldly beauty.`,
    `Upon the ancient pyramids of sand and sun, ${document.getElementById('michiName').value} the Desert King reigned supreme, his golden fur shimmering in the scorching heat.`,
    `In the heart of the bustling metropolis, ${document.getElementById('michiName').value} the Urban Explorer traversed the concrete jungle with fearless determination.`,
    `Amidst the rolling hills and whispering winds, ${document.getElementById('michiName').value} the Nomad wandered with a free spirit and wild heart.`,
    `In the depths of the enchanted forest, ${document.getElementById('michiName').value} the Forest Guardian watched over the ancient trees with a vigilant eye.`,
    `Beneath the silvery glow of the full moon, ${document.getElementById('michiName').value} the Night Stalker prowled with silent grace and predatory skill.`,
    `Upon the windswept cliffs of the rugged coastline, ${document.getElementById('michiName').value} the Sea Marauder surveyed his watery domain with a keen eye and salty whiskers.`,
    `In the land of eternal snow and ice, ${document.getElementById('michiName').value} the Frost Wanderer braved the frigid temperatures with stoic resolve.`,
    `Amidst the ancient ruins of a forgotten civilization, ${document.getElementById('michiName').value} the Relic Hunter delved into the depths of history with insatiable curiosity.`,
    `In the heart of the sapphire jungle, ${document.getElementById('michiName').value} the Jungle Sentinel stood as guardian of the verdant realm.`,
    `Beneath the shimmering lights of the neon cityscape, ${document.getElementById('michiName').value} the Neon Nomad roamed with an electric energy and vibrant spirit.`,
    `Upon the sun-kissed meadows of the rolling countryside, ${document.getElementById('michiName').value} the Meadow Wanderer frolicked with boundless joy and carefree abandon.`,
    `In the heart of the ancient temple ruins, ${document.getElementById('michiName').value} the Temple Guardian watched over sacred relics with unwavering devotion.`,
    `Amidst the swirling mists of the mystical marshlands, ${document.getElementById('michiName').value} the Marsh Mystic communed with the spirits of the swamp with an otherworldly grace.`,
    `Beneath the shadow of the towering skyscrapers, ${document.getElementById('michiName').value} the Alley Avenger prowled with a steely determination and unwavering resolve.`
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


// experiment:
// cambiar comportamiento de input range para que no salga el teclado
const rangeInputs = document.querySelectorAll('input[type="range"]');

rangeInputs.forEach(input => {
input.addEventListener('touchstart', () => {
  input.type = 'text';
});

input.addEventListener('touchend', () => {
  input.type = 'range';
});

input.addEventListener('mousedown', () => {
  input.type = 'text';
});

input.addEventListener('mouseup', () => {
  input.type = 'range';
});
})


