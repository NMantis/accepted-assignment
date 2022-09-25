import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Cocktail } from 'src/app/models/Cocktail';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  cocktail: Cocktail;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
      .pipe(first())
      .subscribe(({ cocktail }) => this.cocktail = cocktail);
  }

}
