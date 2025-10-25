export class Spaceship {
  id: string;
  name: string;
  speed: number;
  weapon: string;

  constructor(id: string, name: string, speed: number, weapon: string) {
    this.id = id;
    this.name = name;
    this.speed = speed;
    this.weapon = weapon;
  }

  fly(): string {
    return `${this.name} is flying at ${this.speed} speed with ${this.weapon}`;
  }
}
