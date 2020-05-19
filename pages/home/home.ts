import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public username : any = '';
  public password : any = '';

  constructor(public navCtrl: NavController, public alertCtrl : AlertController) {

  }
  SignIn (){
    let alert = this.alertCtrl.create({
      title: 'Bem vindo!',
      subTitle: "Usuário: " + this.username + "Senha: " + this.password,
      buttons: ['Continuar']
    });
    alert.present();
  }

}
