import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("About", "/about"),
    new Menu("Help", "/help/1"),
    new Menu("Revisions", "/revision"),
    new Menu("Admin Login", "/admin/login")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
