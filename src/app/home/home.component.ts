import { Component, OnInit  }  from  '@angular/core';
import { Subject            }  from  'rxjs';
import { ServiceService     }  from  '../service/service.service';
import { takeUntil          }  from  'rxjs/operators';

@Component({
  selector    :  'app-home',
  templateUrl :  './home.component.html',
  styleUrls   :  ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos               : any[];
  private unsubscribe$ : Subject<any> = new Subject();


  constructor( private youTubeService: ServiceService) { }

  ngOnInit() {
   this.getVideo('dogs');
  }

  getVideo(topic) {
    this.videos = [];
    this.youTubeService
      .getVideosByTopic(topic)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
      });
  }



}

