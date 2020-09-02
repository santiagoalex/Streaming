import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { map        }  from 'rxjs/operators';
import { Observable }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiKey     : string  = 'AIzaSyBxoDLhRE9vGn7A_ubIh9YsN7HEn-tL9aQ'
  url        : string  = 'https://www.googleapis.com/youtube/v3/search?key='
  maxResults : number  =  6
  topic      : string  = 'dog'

  constructor( private http : HttpClient ) { }

  getVideosForChanel(maxResults): Observable<Object> {

    let query = this.url + this.apiKey  + '&order=date&q='+this.topic+'&part=snippet&type=video,id&maxResults=' + maxResults;
    console.log("oh Dios que funcione ");
    let response : any;
    return this.http.get( query )
      .pipe(
        map((res) => {
        console.log(res);
        response = res;
        return response;
        console.log(res);

      }))
  }




}
