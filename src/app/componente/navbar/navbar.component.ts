import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string;
  button_user: string;
  image_logo: string;
  constructor(){
    this.title="Proyecto Angular";
    this.button_user="Creador ¡Clickeame!";
    this.image_logo='assets/angular_logo.png';
  }
  
  text_changer(){
    this.button_user="André Jesús Torres";
  }
  
}
