import { CharacterService } from './character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'serie';

  Character;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.getData().subscribe((res: any) => { // Success
      console.log(res);
      this.Character =  res.results;
      });
  }
}
