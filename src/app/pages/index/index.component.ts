import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from 'src/app/models/Cocktail';
import { CocktailCategory } from 'src/app/models/CocktailCategory';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  drinks$: Observable<Cocktail[]>;
  categories$: Observable<CocktailCategory[]>;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.drinks$ = this.cocktailService.index();
    this.categories$ = this.cocktailService.categories();
  }

}
