import { Component, OnInit } from '@angular/core';
import { Subject           }  from 'rxjs';
import { ServiceService    }  from '../service/service.service';
import { takeUntil         }  from 'rxjs/operators';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {

  videos : any[];
  private unsubscribe$: Subject<any> = new Subject();

  
  constructor( /*private spinner : NgxSpinnerService,*/ private youTubeService : ServiceService) { }

  ngOnInit() {
   /* this.spinner.show()
    setTimeout(()=>{
      this.spinner.hide()
     },3000)*/
     
    this.videos = [];
    this.youTubeService
    .getVideosForChanel(6)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(lista => {
      for (let element of lista["items"]) {
        this.videos.push(element)
      }
    });
  }

}
