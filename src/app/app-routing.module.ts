import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { CocktailResolver } from './resolvers/cocktail.resolver';
import { CocktailsResolver } from './resolvers/cocktails.resolver';

const routes: Routes = [{
  path: '',
  component: IndexComponent,
  resolve: { cocktails: CocktailsResolver }
}, {
  path: 'preview/:id',
  component: PreviewComponent,
  resolve: { cocktail: CocktailResolver }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
