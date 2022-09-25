import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/Cocktail';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss']
})
export class CocktailCardComponent implements OnInit {

  @Input()
  drink: Cocktail;

  constructor() { }

  ngOnInit(): void {
  }

}
