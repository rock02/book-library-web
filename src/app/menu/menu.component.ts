import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: 'home' 
            },
            {
                label: 'Usuários',
                icon: 'pi pi-fw pi-users',
                routerLink: 'user',
                items: [
                    {label: 'Novo', icon: 'pi pi-fw pi-plus', routerLink: 'user' },
                ]
            },
            {
                label: 'Livros',
                icon: 'pi pi-fw pi-book',
                routerLink: 'book',
                items: [
                    {label: 'Novo', icon: 'pi pi-fw pi-plus', routerLink: 'book/register' },
                ]
            }
        ];
  }

}
