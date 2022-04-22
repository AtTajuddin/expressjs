async function start() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  createBreedList(data.message);
  console.log(data.message);
}
start();

function createBreedList(breedList) {
  document.getElementById('breed').innerHTML = /*html*/ `
   <select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option>
    ${Object.keys(breedList)
      .map((breed) => {
        return `<option>${breed}</option>`;
      })
      .join('')}}
  </select>`;
}

async function loadByBreed(breed) {
  if (breed != 'Choose a dog breed') {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await res.json();
    createSlideshow(data.message);
  }
}

function createSlideshow(images) {
  document.getElementById('slideshow').innerHTML = /*html*/ `
  <div class="slide" style="background-image: url('${images[0]}');"></div>`;
}
