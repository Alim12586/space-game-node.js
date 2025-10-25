import fs from 'fs';
import { DOMParser } from 'xmldom';

export function loadShips(): any[] {
  const xmlData = fs.readFileSync('./src/assets/ships.xml', 'utf-8');
  const doc = new DOMParser().parseFromString(xmlData, 'text/xml');
  const shipNodes = doc.getElementsByTagName('ship');
  const ships = [];

  for (let i = 0; i < shipNodes.length; i++) {
    const ship = shipNodes[i];
    ships.push({
      id: ship.getAttribute('id'),
      name: ship.getElementsByTagName('name')[0].textContent,
      speed: parseInt(ship.getElementsByTagName('speed')[0].textContent || '0'),
      weapon: ship.getElementsByTagName('weapon')[0].textContent
    });
  }

  return ships;
}
import { Spaceship } from './spaceship';
import fs from 'fs';
import { DOMParser } from 'xmldom';

export function loadShips(): Spaceship[] {
  const xmlData = fs.readFileSync('./src/assets/ships.xml', 'utf-8');
  const doc = new DOMParser().parseFromString(xmlData, 'text/xml');
  const shipNodes = doc.getElementsByTagName('ship');
  const ships: Spaceship[] = [];

  for (let i = 0; i < shipNodes.length; i++) {
    const ship = shipNodes[i];
    const id = ship.getAttribute('id') || '';
    const name = ship.getElementsByTagName('name')[0].textContent || '';
    const speed = parseInt(ship.getElementsByTagName('speed')[0].textContent || '0');
    const weapon = ship.getElementsByTagName('weapon')[0].textContent || '';
    ships.push(new Spaceship(id, name, speed, weapon));
  }

  return ships;
}
