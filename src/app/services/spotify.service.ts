import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDSygdoYGFFMp_O_8miQ0Ec8akWtvOOzuFoFmvAJ1orWc2XxuQKCLVsFqmy4Ms-8B3T6cwHguPj84mAot8'
    });

    this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .subscribe(data=>{
        console.log(data);
      })

  }

}
