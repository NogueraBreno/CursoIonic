import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [MovieProvider]

})
export class FeedPage {

  public obj_feed = {

    title: "Gil Brother",
    date: "November 5, 1955",
    desc: "Não aguenta 10 minutos de porrada comigo!",
    qtd_likes: 12,
    qtd_cmts: 4,
    cmts_time: 11
  }

  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }
  username = "Gil Brother";
  public somaDeDoisNumeros(num1: number, num2: number): void {

    //  alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body)
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno)

      }, error => {
        console.log(error);
      }
    )

  }

}
