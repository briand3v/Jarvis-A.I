export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  constructor(message?) {
    this.content = message && message.content ? message.content : '';
    this.timestamp = message && message.timestamp ? message.timestamp : null;
    this.avatar = message && message.avatar ? message.avatar : '';
  }
}
