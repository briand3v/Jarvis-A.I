import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroForm: FormGroup;

  style: object = {
    position: 'relative',
    width: '100%',
    height: '100%',
    radius: 10
  };
  myStyle: object = {};
  params: object = {};
  width: Number = 100;
  height: Number = 100;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.heroForm = this.fb.group({
      email: '',
      comment: ''
    });
  }

  send() {
    const formSend = this.prepareForm();
    console.log(formSend);
  }

  prepareForm(): Comment {
    const formModel = this.heroForm.value;
    const saveInfo: Comment = {
      email: formModel.email,
      comment: formModel.comment
    };
    return saveInfo;
  }
}
