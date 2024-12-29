import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { user } from './user';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  userObj: user;

  constructor(
    private routerService: RouteService,
    private authservice: AuthService
  ) {
    this.userObj = new user();
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.userObj = loginForm.value;
      console.log(this.userObj);
this.authservice.authenticateUser(this.userObj).subscribe((res:any)=>{
  this.authservice.setBearerToken(res['token']);
  this.routerService.routeToNews();
}

)
  
    } else {
      console.log('Invalid Data');
    }
  }
}
