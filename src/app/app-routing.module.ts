import { NgModule                 }  from  '@angular/core';
import { Routes, RouterModule     }  from  '@angular/router';
import { VideoStreamingComponent  }  from  './video-streaming/video-streaming.component'


const routes: Routes = [ 
  { path : 'video/:id'  , component : VideoStreamingComponent },
  { path : ''           , component : VideoStreamingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
