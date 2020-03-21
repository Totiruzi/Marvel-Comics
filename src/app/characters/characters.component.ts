import { Component, OnInit } from '@angular/core';

import { CharactersApiService } from './character/shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  constructor( private charactersApiService: CharactersApiService) {}
  allCharacters: Observable<any>;


  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.charactersApiService.getAllCharacters();
  }

}
