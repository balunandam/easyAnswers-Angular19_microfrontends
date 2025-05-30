import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { NotificationService } from '../../../services/notification.service';
import { SNACK_BAR_MESSAGE_TYPE } from '../../../services/notification.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private dbService: NgxIndexedDBService, private notificationService: NotificationService, private router: Router ) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }
  login(): void {
    const formData = this.loginForm.getRawValue();
    console.log(formData);
    const userDetails = localStorage.getItem('userDetails' + formData.username);
    if (!userDetails) {
      this.notificationService.showNotification('User Not Found! Please Register', SNACK_BAR_MESSAGE_TYPE.error);
    } else if (JSON.parse(userDetails).password !== formData.password) {
      this.notificationService.showNotification('Incorrect password, please try again', SNACK_BAR_MESSAGE_TYPE.error);
    } else {
      this.notificationService.showNotification('Welcome' + formData.name, SNACK_BAR_MESSAGE_TYPE.success);
      this.router.navigate(['/home']);
    }
  }
}
