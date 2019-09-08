import { Injectable } from '@angular/core';

export interface Fish {
  name: string;
  description: string;
  img_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class FishDataService {
  /**
   * Typically we are accessing a database here or importing data from an external API. 
   * For this example, we will just have an array of data as our data source.
   */

  private fishData: Fish[] = [
    { name: 'Puffer Fish', description: 'Puffer fish can puff up to twice their size and excrete toxic poison from their spines.', img_url: 'assets/puffer_fish.jpg' },
    { name: 'Angel Fish', description: 'Angel fish have extended dorsal and anal fins, typically brightly colored or boldly striped.', img_url: 'assets/angel_fish.jpg' },
    { name: 'Clown Fish', description: 'Clown fish live in anemone, we know one - Nemo! Clown fish have a distinctive orange body with white stripes.', img_url: 'assets/clown_fish.jpg' }, 
    { name: 'Blue Orange Tang Fish', description: 'Tang fish get their pointed tails that resemble a tang scalpel, using it as self-defense when threatened in their natural coral reef habitat.', img_url: 'assets/blue_orange_tang_fish.jpg' },
  ]

  constructor() {}

  addData(data: Fish) {
    this.fishData.push(data);
  }

  getData(): Fish[] {
    return this.fishData;
  }

  toString(data: Fish): string {
    let result: string;
    result += data.name + ", ";
    result += data.description + ", ";
    result += data.img_url;
    return result;
  }
}
