import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
      password: ''
    });
  }

  send() {
    const user = this.userForm.value;
    console.log(user);
    this.authService.createUser(user).subscribe(data => console.log(data));
  }
}
