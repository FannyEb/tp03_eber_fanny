import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../core/model/client';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  client: Client = new Client();
  showInfo = false;

  validate(){
    // password and confirmPassword must be equals
    if(this.client.password != this.client.confirmPassword){
      alert('le mot de passe n\'est pas identique à la confirmation de mot de passe')
      return
    }
    this.showInfo = true    
  }
}
