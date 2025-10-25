import { loadShips } from './engine';

const ships = loadShips();
const list = document.getElementById('ship-list');

ships.forEach(ship => {
  const li = document.createElement('li');
  li.textContent = `${ship.name} - Speed: ${ship.speed} - Weapon: ${ship.weapon}`;
  list?.appendChild(li);
});
