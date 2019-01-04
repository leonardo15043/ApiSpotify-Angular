import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCScORqi3PPV9ocy3PsT4vijiFK9QfrWuRo_v79mV0m55vBsP4kRUh8aXukaanmqVObsK4wwBnIdhwyvBE'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });

  }

}
