import { Component, OnInit, Input }  from  '@angular/core';
import { ServiceService           }  from  '../service/service.service';
import { Subject                  }  from  'rxjs';



@Component({
  selector    :  'app-video-thumbnail',
  templateUrl :  './video-thumbnail.component.html',
  styleUrls   :  ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {

  @Input() videoIdentification: string;
  videoDescription: any[];
  private unsubscribe$: Subject<any> = new Subject();



  constructor(private youTubeService: ServiceService) { }

  ngOnInit() { }

  ngOnChanges() {
    this.getVideoDescription(this.videoIdentification)
  }

  getVideoDescription(id) {
    this.videoDescription = [];
    this.youTubeService
      .getVideoById(id)
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videoDescription.push(element)
        }
      });


  }

}
