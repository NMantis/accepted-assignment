import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PreviewComponent } from './pages/preview/preview.component';

const routes: Routes = [{
  path: '',
  component: IndexComponent,
  children: [
    {
      path: 'preview/:id',
      component: PreviewComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
