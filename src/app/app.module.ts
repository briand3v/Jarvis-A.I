import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParticlesModule } from 'angular-particle';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatJarvisComponent } from './components/chat-jarvis/chat-jarvis.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { DialogFlowService } from './services/dialog-flow.service';
import { NavbarScrollDirective } from './navbar-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatJarvisComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent,
    NavbarScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DialogFlowService],
  bootstrap: [AppComponent]
})
export class AppModule {}
