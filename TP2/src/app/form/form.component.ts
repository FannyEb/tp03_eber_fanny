import { Component, OnInit } from '@angular/core';
import { Client } from '../core/model/client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  client: Client = new Client();

  validate(){
    // password and confirmPassword must be equals
    if(this.client.password != this.client.confirmPassword){
      alert('password and confirmPassword must be equals');
      return;
    }
    
  }
}
