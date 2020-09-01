import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.getData().subscribe((res: any) => { // Success
      console.log(res);
      this.Character =  res.results;
      });
  }
}
