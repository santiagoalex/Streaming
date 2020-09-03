import { BrowserModule      }  from  '@angular/platform-browser';
import { NgModule           }  from  '@angular/core';
import { HttpClientModule   }  from  '@angular/common/http';
import { FormsModule } from '@angular/forms';





import { AppRoutingModule        }  from  './app-routing.module';
import { AppComponent            }  from  './app.component';
import { VideoThumbnailComponent }  from  './video-thumbnail/video-thumbnail.component';
import { SearchBarComponent      }  from  './search-bar/search-bar.component';
import { VideoStreamingComponent }  from  './video-streaming/video-streaming.component';
import { HomeComponent           }  from  './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    VideoThumbnailComponent,
    SearchBarComponent,
    VideoStreamingComponent,
    HomeComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



