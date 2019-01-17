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
      'Authorization': 'Bearer BQAf46W70rWlROJc7XxMJm-RgZevwBJnCWagzmR58v336kTc3RhSjP-XJsdl24t_mFR5ciZ1LZ20Dazad9k'
    });

    return this.http.get(url , { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
          .pipe( map( data =>{
            return data['albums'].items;
          }));
  }

  getArtista(termino){
      return this.getQuery('search?type=artist&q='+termino)
            .pipe( map( data =>{
              return data['artists'].items;
            }));
  }

}
