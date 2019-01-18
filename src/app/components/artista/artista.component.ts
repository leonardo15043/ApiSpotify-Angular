import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  loading:boolean;
  topTracks: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.router.params.subscribe( params => {
      this.loading = true;
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  ngOnInit() {
  }

  getArtista( id: string){
    this.spotify.getArtista( id )
      .subscribe( artista => {
        this.artista = artista;
        this.loading = false;
      })
  }

  getTopTracks( id: string){
    this.spotify.getTopTracks( id )
      .subscribe( topTracks => {
        this.topTracks = topTracks;
      })
  }

}
