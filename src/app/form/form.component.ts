import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Client } from '../core/model/client';
import { ClientService } from '../core/service/client/client.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  client: Client = new Client();
  showInfo = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private notifier: NotifierService, private clientService: ClientService) {
    this.myForm = this.fb.group({
      phone: [undefined, [Validators.required]],
    });
  }

  validate() {
    //phone valid 
    if(this.myForm?.valid){
      this.client.phone = this.myForm.get('phone')?.value
    }
    // password and confirmPassword must be equals
    if (!this.client.isPasswordConfirm()) {
      this.notifier.notify('error', 'Les mots de passe ne sont pas identiques');
      return
    }
    if (!this.client.isAllCompleted()) {
      this.notifier.notify('error', 'Tous les champs doivent être remplis');
      return
    }

    var id = this.clientService.post(this.client);
    if (id) {
      this.notifier.notify('success', 'Le client a été ajouté avec succès');
      this.router.navigate(['/client-info', id]);
    }
  }
}
