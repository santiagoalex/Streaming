import { Component, OnInit       }  from  '@angular/core'
import { DomSanitizer            }  from  '@angular/platform-browser';
import { ActivatedRoute, Params  }  from  '@angular/router';
import { ServiceService          }  from  '../service/service.service';


@Component({
  selector    :  'app-video-streaming',
  templateUrl :  './video-streaming.component.html',
  styleUrls   :  ['./video-streaming.component.scss']
})

export class VideoStreamingComponent implements OnInit {

  videoDescription : any[];
  videoId          : string;
  tittle           : any[];
  safeurl          ;



  constructor( private _sanitizer : DomSanitizer, private rutaActiva: ActivatedRoute, private youTubeService : ServiceService ) { }
 
  ngOnInit() {
      
      this.videoId = this.rutaActiva.snapshot.params.id;
      this.rutaActiva.params.subscribe(
      (params : Params) =>{
        this.videoId = params.id;        
      }
    )
    
  }
  
  getVideoIframe(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ (this.videoId ? this.videoId:'FIRT7lf8byw'));   
}


}
