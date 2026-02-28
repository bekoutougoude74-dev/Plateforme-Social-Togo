import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  activeView = signal<string>('dashboard');

  setActive(view: string) {
    this.activeView.set(view);
  }

  constructor() {
  }
}
