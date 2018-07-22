import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page = {};

  constructor(
    public nav: NavController) {

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('test', Validators.required)
    });
    this.main_page = { component: TabsNavigationPage };

  }

  doLogin() {
    this.nav.setRoot(TabsNavigationPage);
  }

}
