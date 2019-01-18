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
      'Authorization': 'Bearer BQCqzcZYfel-P3HETjopxCSgt37PQBaMD18W2ivY9DdxHJ53bXDyS2gJzc1v0XGWhtjrWMmVUwNuqwNOUPA'
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

}
