import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { PeopleComponent } from './people/people.component';
import { DaoService } from './dao/dao.service';

@Component({
  selector: 'my-app',
  directives: [
    HeaderComponent,
    PeopleComponent
  ],
  providers: [
    HTTP_PROVIDERS,
    DaoService
  ],
  template: `
      <header></header>
      <people></people>
  `
})

export class AppComponent {
}
