import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  {

  isLogin:boolean=false;

  constructor(private readonly authService:AuthService,
    private readonly router:Router) {
      authService.token$.subscribe((value)=>{
        value===null
          ?this.isLogin=false
          :this.isLogin=true;
      });      
    };
   
  toLogin(){
    this.authService.token$.value===null
      ?this.router.navigate(['loginForm'])
      :this.router.navigate(['roleLink']);
  }

  toLogout(){
    this.authService.token$.next(null);
    this.authService.tokenData$.next(null);
    this.router.navigate(['']);
  }

}
