import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('plateforme-sociale');
  darkMode = signal<boolean>(false);
  today = new Date();

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
}
