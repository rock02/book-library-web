import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  { path: 'book', 
    loadChildren: () => import('./book/book.module').then(mod => mod.BookModule)
  },
  { path: 'user', 
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
