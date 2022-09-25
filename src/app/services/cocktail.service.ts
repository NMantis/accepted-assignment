import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Cocktail } from '../models/Cocktail';
import { CocktailCategory } from '../models/CocktailCategory';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  index(): Observable<Cocktail[]> {
    const params = new HttpParams().set('a', 'Alcoholic');

    return this.http.get<{ drinks: Cocktail[] }>(`${env.baseUrl}/filter.php`, { params })
      .pipe(map(resp => resp.drinks));
  }

  show(id: string): Observable<Cocktail> {
    const params = new HttpParams().set('i', id);
    return this.http.get<{ drinks: Cocktail[] }>(`${env.baseUrl}/lookup.php`, { params })
      .pipe(
        map(resp => resp.drinks[0]),
        map(drink => new Cocktail(drink)),
      );
  }

  filter(category: string): Observable<Cocktail[]> {
    const params = new HttpParams().set('c', category);

    return this.http.get<{ drinks: Cocktail[] }>(`${env.baseUrl}/filter.php`, { params })
      .pipe(map(resp => resp.drinks));
  }

  search(query: string): Observable<Cocktail[]> {
    const params = new HttpParams().set('s', query);

    return this.http.get<any>(`${env.baseUrl}/search.php`, { params })
      .pipe(map(resp => resp.drinks));
  }

  categories(): Observable<CocktailCategory[]> {
    const params = new HttpParams().set('c', 'list');

    return this.http.get<{ drinks: CocktailCategory[] }>(`${env.baseUrl}/list.php`, { params })
      .pipe(map(resp => resp.drinks));
  }
}
