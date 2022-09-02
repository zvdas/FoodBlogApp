import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-firestore/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router, private fas: AuthService) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  goToBlog(){
    this.router.navigate(['/blog']);
  }

  goToContact(){
    this.router.navigate(['/contact']);
  }

  goToShow(){
    this.router.navigate(['/show']);
  }

  onLogout(){
    this.fas.logout();
    this.router.navigate(['/home']);
  }

}