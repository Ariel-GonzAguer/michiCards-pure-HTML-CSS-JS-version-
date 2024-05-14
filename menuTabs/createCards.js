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

// get ID from TheCatAPI
async function getID() {
  try {
    const response = await fetch(urlTheCatApi);
    if (response.ok) {
      const jsonResponse = await response.json();
      const imgURL = jsonResponse[0]['id'];
      return imgURL;
    }
  } catch (error) {
    console.error(error)
  }
}

// create Card
class michiCard {
  constructor(name, img, atributtes, agility, softness, evilness, goodness, velocity, id) {
    this._name = name;
    this._img = img;
    this._atributtes = atributtes;
    this._agility = agility;
    this._softness = softness;
    this._evilness = evilness;
    this._goodness = goodness;
    this._velocity = velocity;
    this._id = id;
  }
}

function createMichiCard(e) {
  try {
    if (document.getElementById('michiName').checkValidity()) {
      e.preventDefault();
      const michiName = document.getElementById('michiName').value;
      const imgMichi = getImg();
      const michiAtributtes = document.getElementById('atributtes').value || randomAtributtes();
      const agilityStatValue = document.getElementById('agilityStat').value;
      const softnessStatValue = document.getElementById('softnessStat').value;
      const evilnessStatValue = document.getElementById('evilnessStat').value;
      const goodnessStatValue = document.getElementById('goodnessStat').value;
      const velocityStatValue = document.getElementById('velocityStat').value;
      const IDCat = getID();

      const newMichiCard = new michiCard(michiName, imgMichi, michiAtributtes, agilityStatValue, softnessStatValue, evilnessStatValue, goodnessStatValue, velocityStatValue, IDCat);
      console.log(newMichiCard);
      return newMichiCard;
    }
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('ready').addEventListener('click', createMichiCard);

// helpers
function randomAtributtes() {
  const options = ["Mysterious and Agile: The cat glides through the shadows with feline grace, always one step ahead, its eyes gleaming with captivating mystery. With each movement, it exudes an aura of enigmatic elegance, leaving observers mesmerized by its otherworldly presence. Its sleek fur seems to absorb the moonlight as it prowls the night, a silent sentinel of the darkness.",
    "Elegant Predator: With smooth and lethal movements, the cat silently stalks its prey, displaying its wild nature and hunting instinct. Every muscle in its lithe body is poised for action, ready to pounce with deadly accuracy. Its sharp claws and keen senses make it a formidable predator, a testament to its untamed essence.",
    "Curious Explorer: Fearless and inquisitive, the cat ventures into every corner, sniffing and observing with its large eyes, always eager to uncover new secrets. Whether investigating a mysterious noise or simply exploring its surroundings, it approaches each discovery with boundless curiosity and relentless determination. Its insatiable thirst for knowledge drives it to seek out adventure at every turn.",
    "Furry Companion: With its soft fur and comforting purr, the cat is a loyal companion that brings warmth and joy to every home it visits. Whether curled up on a lap or nuzzled against a cheek, it offers solace and companionship in equal measure. Its gentle presence is a constant source of comfort and contentment, a reminder of the simple pleasures of life.",
    "Egocentric Aristocrat: With a regal attitude and an air of superiority, the cat struts with dignity, as if the entire world were at its feet. Its haughty demeanor and disdainful gaze convey a sense of entitlement befitting a royal monarch. Every movement is calculated and deliberate, as if it were born to rule over its domain with unquestioned authority.",
    "Master of Rest: Expertly folded in a sunny corner or nestled in a plush bed, the cat demonstrates its ability to sleep with grace and serenity. With each breath, it emanates an aura of tranquility and relaxation, inviting others to bask in its peaceful presence. Whether lounging lazily in the afternoon sun or drifting off to sleep under the stars, it embodies the essence of restful repose."];
  const randomAtributte = options[Math.floor(Math.random() * options.length)];
  console.log(randomAtributte);
  return randomAtributte;
}