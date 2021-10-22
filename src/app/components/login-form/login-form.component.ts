import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenData } from 'src/app/services/auth.service';

export interface LoginModel{
  username:string,
  password:string
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  

  constructor(private readonly authService:AuthService,
              private readonly router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const loginModel=this.getLoginModel();
    this.authService.toLogin(loginModel)
      .subscribe((tokenData:TokenData)=>{
        {
          console.log("success");
          this.router.navigate(['roleLink']);
        }
      },
        ()=>{console.log("failed")});
    
  }


  //template method

  private getLoginModel():LoginModel{
    return {
      username:"admin",
      password:"admin"
    }
  }

}
