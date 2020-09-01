import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit {
protected id: number;

Character;

constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.getData().subscribe((res: any) => { // Success
      console.log(res);
      this.Character =  res.results;
      });
  }
}

