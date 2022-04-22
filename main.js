async function start() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  createBreedList(data.message);
  console.log(data.message);
}
start();

function createBreedList(breedList) {
  document.getElementById('breed').innerHTML = /*html*/ `
   <select>
    <option>Choose a dog breed</option>
    ${Object.keys(breedList)
      .map((breed) => {
        return `<option>${breed}</option>`;
      })
      .join('')}}
  </select>
`;
}
