import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-profile',
  templateUrl: './fish-profile.component.html',
  styleUrls: ['./fish-profile.component.css']
})
export class FishProfileComponent implements OnInit {
  fishies: string[][] = [
    ['Puffer Fish', 'Puffer fish can puff up to twice their size and excrete toxic poison from their spines.', 'assets/puffer_fish.jpg'], 
    ['Angel Fish', 'Angel fish have extended dorsal and anal fins, typically brightly colored or boldly striped.', 'assets/angel_fish.jpg'],
    ['Clown Fish', 'Clown fish live in anemone, we know one - Nemo!', 'assets/clown_fish.jpg'], 
    ['Blue Orange Tang Fish', 'Tang fish get their pointed tails that resemble a tang scalpel, using it as self-defense when threatened in their natural coral reef habitat.', 'assets/blue_orange_tang_fish.jpg'], 
  ];

  constructor() { }

  ngOnInit() {
  }

}
