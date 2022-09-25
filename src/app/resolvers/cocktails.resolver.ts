import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailsResolver implements Resolve<Cocktail[]> {
  constructor(private cocktailService: CocktailService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cocktail[]> {
    return this.cocktailService.index();
  }
}
