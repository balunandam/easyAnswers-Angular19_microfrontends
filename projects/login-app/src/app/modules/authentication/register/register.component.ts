import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { NotificationService } from '../../../services/notification.service';
import { SNACK_BAR_MESSAGE_TYPE } from '../../../services/notification.enum';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private dbService: NgxIndexedDBService, private notificationService: NotificationService) {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });

  
  }
  register(): void {
    const { username, password, confirmPassword } = this.registerForm.getRawValue();
    if (password === confirmPassword) {
      this.addUserToDB(username, password);
    } else {
      this.notificationService.showNotification('Password mismatched!', SNACK_BAR_MESSAGE_TYPE.error);
    }
  }
  addUserToDB(username: string, password: string): void {
    // this.dbService.add('registrationTable', {username: username, password: password}).subscribe(res => {
    //       this.notificationService.showNotification('Registered Successfully!', SNACK_BAR_MESSAGE_TYPE.success);
    // });
    const userDetails = {
      username,
      password
    }
    localStorage.setItem('userDetails'+userDetails.username, JSON.stringify(userDetails));
    this.notificationService.showNotification('Registered Successfully!', SNACK_BAR_MESSAGE_TYPE.success);
  }
}
