import {Component, HostBinding, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainContent} from './layout/main-content/main-content';
import {Sidebar} from './layout/sidebar/sidebar';
import {Navbar} from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [  MainContent, Sidebar, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plateform-social-ui');
  darkMode = signal<boolean>(false) ;
  today = new Date();
  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }


}
