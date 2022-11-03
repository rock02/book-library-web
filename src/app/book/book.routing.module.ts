import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookRegisterComponent } from './register/book-register/book-register.component';

const routes: Routes = [
  { path: '',
    component: BookComponent
  },
  { path: 'register',
    component: BookRegisterComponent
  },
  { path: ':id',
    component: BookRegisterComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class BookRoutingModule { }
