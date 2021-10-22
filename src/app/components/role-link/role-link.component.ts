import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Roles } from 'src/app/services/auth.service';

@Component({
  selector: 'app-role-link',
  templateUrl: './role-link.component.html',
  styleUrls: ['./role-link.component.scss']
})
export class RoleLinkComponent implements OnInit {
  roles:Roles[]|undefined;
  roleTypes=Roles;
  
  constructor(private readonly authService:AuthService) { }

  ngOnInit(): void {
    this.roles=this.authService.tokenData$.value?.roles;
  }

}
