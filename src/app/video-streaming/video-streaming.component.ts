import { Component, OnInit }  from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


//import { NgxSpinnerService }  from 'ngx-spinner';

@Component({
  selector    :  'app-video-streaming',
  templateUrl :  './video-streaming.component.html',
  styleUrls   :  ['./video-streaming.component.scss']
})
export class VideoStreamingComponent implements OnInit {
  safeurl;
  constructor( private _sanitizer : DomSanitizer ) { }

  ngOnInit() {
    
  }


  getVideoIframe(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zcAalMeaKso');   
}


}
