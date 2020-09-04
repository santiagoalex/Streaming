import { Injectable }  from  '@angular/core';
import { HttpClient }  from  '@angular/common/http';
import { map        }  from  'rxjs/operators';
import { Observable }  from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiKey     : string  = 'AIzaSyD8x8QBvfPbLUGfH1cVF5iLw7HnJdh82Cg'
  url        : string  = 'https://www.googleapis.com/youtube/v3/search?key='
  maxResults : number  =  6
  topic      : string  = 'dogs';
  

  constructor( private http : HttpClient ) { }

  getVideosByTopic(topic): Observable<Object> {
    let query = this.url + this.apiKey  + '&order=date&q='+(this.topic ? this.topic:'dogs')+'&part=snippet&type=video,id&maxResults=' + this.maxResults;
    let response : any;
    return this.http.get( query )
      .pipe(
        map((res) => {
        response = res;
        this.topic=topic
        return response; 
      }))
      
  }

  getVideoById(id): Observable<Object> {
    let query = this.url + this.apiKey  + '&order=date&q='+(this.topic ? this.topic:'dogs')+'&part=snippet&type=video&id='+id+'&maxResults='+ this.maxResults ;
    let response : any;
    return this.http.get( query )
      .pipe(
        map((res) => {
        response = res;
        return response;
      }))
  }




}
