import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/Rx';


@Component({
  selector: 'kids-profile-page',
  templateUrl: 'kids.html'
})
export class KidsProfilePage {

  constructor(
    public nav: NavController
  ) {
  }


}
