import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { InputNumbersDirective } from './core/directive/input-numbers/input-numbers.directive';
import { InputLettersDirective } from './core/directive/input-letters/input-letters.directive';
import { PhoneNumberPipe } from './core/pipe/phone-number/phone-number.pipe';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule }  from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { ProductCategoryPipe } from './core/pipe/product-category/product-category.pipe';
import { ChipActivateDirective } from './core/directive/chip-activate/chip-activate.directive';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'client-form', component: FormComponent },
  { path: 'client-info/:id', component: ClientInfoComponent },
  {path: 'catalogue', component: CatalogueComponent}
];

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ClientInfoComponent,
    InputNumbersDirective,
    InputLettersDirective,
    PhoneNumberPipe,
    CatalogueComponent,
    ProductCategoryPipe,
    ChipActivateDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    HttpClientModule,
    MatDividerModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
