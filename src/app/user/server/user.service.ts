import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User {
    let user = new User();

    user.name="Aricia";
    user.email="aricia.lays@gmail.com";

    return user;
  }
}
