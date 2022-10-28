import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
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
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.France, CountryISO.UnitedKingdom];
  
  constructor(private router: Router, private notifier: NotifierService, private clientService: ClientService) { }

  validate() {
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
