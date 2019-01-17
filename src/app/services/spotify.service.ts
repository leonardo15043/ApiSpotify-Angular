import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC8vMzDHu_TtzOp5tc8pSZ_t_V5n0gUlDUHMuKBcAw7VWnmdDJfg9qV80BQIWYFrJVub3V-PuNW9To-Wyo'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .pipe( map( data =>{
        return data['albums'].items;
      }))

  }

  getArtista(termino){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC8vMzDHu_TtzOp5tc8pSZ_t_V5n0gUlDUHMuKBcAw7VWnmdDJfg9qV80BQIWYFrJVub3V-PuNW9To-Wyo'
    });

    return this.http.get('https://api.spotify.com/v1/search?type=artist&q='+termino, { headers })
      .pipe( map( data =>{
            return data['artists'].items;
          }))

  }

}
