import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD8MhUzMcaVYpIkUQnlOz3He9pw-akThII3svLQctBbOf2G9s0GAg08rcd2bmTItLroFHAOJiHM0FdVURQ'
    });

    return this.http.get(url , { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
          .pipe( map( data =>{
            return data['albums'].items;
          }));
  }

  getArtistas( termino: String ){
      return this.getQuery(`search?type=artist&q=${ termino }`)
            .pipe( map( data =>{
              return data['artists'].items;
            }));
  }

  getArtista (id){
      return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: String ){
      return this.getQuery(`artists/${ id }/top-tracks?country=us`)
            .pipe( map( data =>{
              return data['tracks'];
            }));
  }

}
