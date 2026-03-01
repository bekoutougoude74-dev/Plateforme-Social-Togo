import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="layout-wrapper">
      <app-sidebar></app-sidebar>
      <main class="content-area">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .layout-wrapper {
      display: flex;
      height: 100vh;
      background: #fdfdfd;
      overflow: hidden;
    }
    .content-area {
      flex: 1;
      padding: 0;
      overflow-y: auto;
      scrollbar-gutter: stable;
    }
  `]
})
export class MainLayoutComponent { }
