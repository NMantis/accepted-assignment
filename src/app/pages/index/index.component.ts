import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { auditTime, first, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { Cocktail } from 'src/app/models/Cocktail';
import { CocktailCategory } from 'src/app/models/CocktailCategory';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  drinks$: Observable<Cocktail[]>;
  categories$: Observable<CocktailCategory[]>;
  private destroyed$ = new Subject<boolean>();

  form = new FormGroup({
    category: new FormControl(),
    query: new FormControl()
  });

  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /* Get all the cocktails from the resolver */
    this.drinks$ = this.route.data
      .pipe(
        first(),
        map(data => data['cocktails'])
      );

    /* Initiate categories */
    this.categories$ = this.cocktailService.categories();

    this.categoryListener();
    this.queryListener();
  }

  /**
   * @description Filter cocktails by category.
   * Multiple filters are not supported by the API 
   * so we clear the query input.
   */
  private categoryListener() {

    this.form.get('category')!
      .valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        tap(() => this.reset('query')),
      ).subscribe(category => this.drinks$ = this.cocktailService.filter(category));

  }

  /**
   * @description Search by cocktail name. 
   * Uses auditTime for request optimization.
   */
  private queryListener() {

    this.form.get('query')!
      .valueChanges
      .pipe(
        auditTime(500),
        takeUntil(this.destroyed$),
        tap(() => this.reset('category')),
      ).subscribe(query => {
        if (query) {
          this.drinks$ = this.cocktailService.search(query);
        } else {
          this.drinks$ = this.cocktailService.index();
        }
      });

  }

  private reset(fieldName: 'query' | 'category') {
    this.form.get(fieldName)?.setValue('', { emitEvent: false });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
