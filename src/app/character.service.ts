import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private HttpClient: HttpClient) { }
  getData() {
    return this.HttpClient.get('https://rickandmortyapi.com/api/character/');
  };
}
