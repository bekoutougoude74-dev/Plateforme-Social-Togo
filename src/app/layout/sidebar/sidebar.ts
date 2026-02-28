import {Component, OnInit, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ViewService} from '../../services/viewService/view-service';



@Component({
  selector: 'app-sidebar',
  imports: [



  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {

 constructor(public viewService: ViewService) {}
 protected activeView = signal<string>('dashboard');



  ngOnInit(): void {

    this.activeView =  this.viewService.activeView

  }






}
