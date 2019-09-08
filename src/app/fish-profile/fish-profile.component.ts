import { Component } from '@angular/core';
import { FishDataService } from '../fish-data.service';

@Component({
  selector: 'app-fish-profile',
  templateUrl: './fish-profile.component.html',
  styleUrls: ['./fish-profile.component.css']
})
export class FishProfileComponent {
  fishies;
  constructor(private fishService: FishDataService) { 
    this.fishies = fishService.getData();
  }
}
