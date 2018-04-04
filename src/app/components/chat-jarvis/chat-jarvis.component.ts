import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-chat-jarvis',
  templateUrl: './chat-jarvis.component.html',
  styleUrls: ['./chat-jarvis.component.css']
})
export class ChatJarvisComponent implements OnInit {
  messages: Message[] = [];

  style: object = {
    position: 'relative',
    width: '1500px',
    height: '100%',
    radius: 10
  };
  myStyle: object = {};
  params: object = {};
  width: Number = 100;
  height: Number = 100;
  constructor() {}

  ngOnInit() {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
  }
}
