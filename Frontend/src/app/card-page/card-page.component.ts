import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
constructor(private toast: NgToastService){}
  ngOnInit(): void {
this.showNotification()  }
showNotification() {

  this.toast.success({
    detail: 'Welcome Back',
    summary: 'Nice to see u again sir',
    duration: 1500
  });
}
}
