import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm: FormGroup;
constructor(private dbService: NgxIndexedDBService) {
  this.loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
}
login(): void {
  const formData = this.loginForm.getRawValue();
  console.log(formData);
  const userDetails = localStorage.getItem('userDetails'+formData.username)
  console.log(userDetails);
//    this.dbService.getByKey('registrationTable', 'name').subscribe((people) => {
//   console.log(people);
// });
}
}
