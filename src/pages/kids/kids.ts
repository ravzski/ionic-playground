import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KidsProfilePage } from '../kids-profile/kids';


import 'rxjs/Rx';


@Component({
  selector: 'kids-page',
  templateUrl: 'kids.html'
})
export class KidsPage {

  constructor(
    public nav: NavController
  ) {
  }


  viewDetails() {
    this.nav.push(KidsProfilePage);
  }

}
