import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.userForm = this.fb.group({
      username: '',
      email: '',
      password: ''
    });
  }

  send() {
    const user: User = this.userForm.value;
    console.log(user);
    this.authService.createUser(user).subscribe(data => console.log(data));
  }
}
