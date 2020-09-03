import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { map        }  from 'rxjs/operators';
import { Observable }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiKey     : string  = 'AIzaSyBq06xqM8E2HXTeK-bWNVmsV43Gu3LdwS8'
  url        : string  = 'https://www.googleapis.com/youtube/v3/search?key='
  maxResults : number  =  1
  

  constructor( private http : HttpClient ) { }

  getVideosByTopic(topic): Observable<Object> {

    let query = this.url + this.apiKey  + '&order=date&q='+topic+'&part=snippet&type=video,id&maxResults=' + this.maxResults;
    console.log("oh Dios que funcione ");
    let response : any;
    return this.http.get( query )
      .pipe(
        map((res) => {
        console.log(res);
        response = res;
        return response;
      

      }))
  }




}
