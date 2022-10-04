import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../core/model/client';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent {

  @Output() back: EventEmitter<any> = new EventEmitter();
  @Input() client: Client = new Client()

}
