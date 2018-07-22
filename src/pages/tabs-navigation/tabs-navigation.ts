import { Component } from '@angular/core';


import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor() {
    this.tab1Root = NotificationsPage;
    this.tab2Root = NotificationsPage;
    this.tab3Root = NotificationsPage;
  }
}
