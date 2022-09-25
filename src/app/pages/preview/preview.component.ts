import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  cocktail: any;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.data
      .pipe(first())
      .subscribe(({ cocktail }) => {
        console.log(cocktail);
        this.cocktail = cocktail
      });
  }

  goBack() {
    this.location.back();
  }
}
