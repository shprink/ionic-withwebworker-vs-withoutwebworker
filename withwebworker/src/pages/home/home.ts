import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { getRandomItems } from '../../../../data';

interface IRow {
  title: string;
  img: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rows: IRow[] = [];

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.rows = getRandomItems();
  }

  doRefresh(refresher) {
    this.rows = getRandomItems();
    refresher.complete();
  }

}
