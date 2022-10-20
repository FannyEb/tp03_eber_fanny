import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Client } from '../core/model/client';
import { PhoneNumberPipe } from '../core/pipe/phone-number/phone-number.pipe';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  client: Client = new Client();
  showInfo = false;
  constructor(private notifier: NotifierService) { }

  validate(){
    // password and confirmPassword must be equals
    if(!this.client.isPasswordConfirm()){
      this.notifier.notify('error', 'Les mots de passe ne sont pas identiques');
      return
    }
    if(!this.client.isAllCompleted()){
      this.notifier.notify('error', 'Tous les champs doivent être remplis');
      return  
    } 
    
    this.showInfo = true;
  }
}
