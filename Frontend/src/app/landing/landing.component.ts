import { Component, OnInit,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private router: Router,private toast: NgToastService,private renderer: Renderer2) {}
  showNotification() {

      this.toast.success({
        detail: 'Great Job',
        summary: 'U have been signed up successfully',
        duration: 1500
      });
  }
  ngOnInit(): void {
    this.showNotification()
    }

  navigateToSignUp(): void {
    this.router.navigate(['/signup']);
  }
  showModal() {
    const modal = document.getElementById('popup-modal');
    if (modal) {
      this.renderer.removeClass(modal, 'hidden');
    }
  }

}
