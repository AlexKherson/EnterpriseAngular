import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { LoginModel } from '../components/login-form/login-form.component';
import {tap,map}  from 'rxjs/operators'

export enum Roles{
  Admin,
  ProductManager
}

interface Token{
  token:string
}

export interface TokenData{

  roles:Roles[]
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl="https://localhost:5001/api/AuthToken";

  token$=new BehaviorSubject<String | null>(null);
  tokenData$=new BehaviorSubject<TokenData | null>(null);

  constructor(private readonly client:HttpClient) { }

  toLogin(loginModel:LoginModel):Observable<TokenData>{
    return this.client.post<Token>(this.apiUrl,loginModel)
      .pipe(
        tap((token)=>this.token$.next(token.token)),
        map((token)=>
          {
            const tokenData= this.ReadToken(token);
            this.tokenData$.next(tokenData);
            return tokenData;
          })
      )
  }

  private ReadToken(token:Token): TokenData{
    var dataUser=this.getUserData(token);
    return this.createTokenData(dataUser);
  }

  private getUserData(token:Token) : JSON{
    const dataUserRaw=token.token?.split('.')[1];
    const dataUser=atob(dataUserRaw);
    return JSON.parse(dataUser);
  }

  private createTokenData(userData:any):TokenData{
    const rolesData = userData["roles"];
    const roles= typeof rolesData==="string"
        ? [rolesData]
        : rolesData;      
    roles.map((role:string)=>{

         Roles[role as keyof typeof Roles]  
      });  
    return {
      roles ,
    }
  }
}
