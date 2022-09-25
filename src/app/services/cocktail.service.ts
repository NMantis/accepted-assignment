import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Cocktail } from '../models/Cocktail';
import { CocktailCategory } from '../models/CocktailCategory';
import { Filters } from '../models/Filters';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  index(): Observable<Cocktail[]> {
    return this.http.get<{ drinks: Cocktail[] }>(`${env.baseUrl}/filter.php?a=Alcoholic`)
      .pipe(map(resp => resp.drinks));
  }

  categories(): Observable<CocktailCategory[]> {
    return this.http.get<{ drinks: CocktailCategory[] }>(`${env.baseUrl}/list.php?c=list`)
      .pipe(map(resp => resp.drinks))
  }

  show(id: string) {

  }
}
