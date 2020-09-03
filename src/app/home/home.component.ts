import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor( private youTubeService: ServiceService) { }

  ngOnInit() {
   this.getVideo('dogs');
   console.log("on init")
  }

  getVideo(topic) {
    console.log ("entra el topic "+topic)
    this.videos = [];
    this.youTubeService
      .getVideosByTopic(topic)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
        console.log("esta en el get video los items son " + this.videos +" y la lista es "+ lista)
      });
      console.log("entra en los videos de "+topic +this.videos)
  }

}

