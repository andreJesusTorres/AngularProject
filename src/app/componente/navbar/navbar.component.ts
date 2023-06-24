import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string;
  text: string;
  button_user: string;
  constructor(){
    this.title="Proyecto Angular";
    this.text="<-- Barra de navegación -->";
    this.button_user="Usuario";
  }
  text_changer(){
    this.button_user="André Jesús Torres";
  }
}
