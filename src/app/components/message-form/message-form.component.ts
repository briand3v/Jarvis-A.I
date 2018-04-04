import { Component, OnInit, Input } from '@angular/core';
import { DialogFlowService } from '../../services/dialog-flow.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Input('message') message: Message = new Message({});
  @Input('messages') messages: Message[] = [];
  constructor(private dialogService: DialogFlowService) {}

  ngOnInit() {}

  sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);
    this.dialogService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message({
          content: res.result.fulfillment.speech,
          avatar:
            'https://cdn.dribbble.com/users/616823/screenshots/3682824/flourish.gif',
          timestamp: res.timestamp
        })
      );
    });
    this.message = new Message({});
  }
}
