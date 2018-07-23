import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/Rx';


@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(
    public nav: NavController
  ) {
  }


}
