import { Component, OnInit } from '@angular/core';
import { User } from './server/user';
import { UserService } from './server/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user!:User;
  constructor(private userServicer:UserService) { }

  ngOnInit(): void {
    this.user = this.userServicer.getUser();
  }

}
