import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    // type script
    appTitle: string = 'Pokemon Bro';
    constructor(private dataService: DataService) { }

  //first things that runs after page loads
  ngOnInit() {
    this.dataService.getPokemon()
  }

}
