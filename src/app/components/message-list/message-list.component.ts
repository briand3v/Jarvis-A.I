import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  currentDate: Date = new Date();

  @Input('messages') private messages: Message[];

  constructor() {}

  ngOnInit() {}
}
