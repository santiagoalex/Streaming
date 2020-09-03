import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() topic: EventEmitter <string> = new EventEmitter();
  search: string;

  constructor( private youTubeService : ServiceService) { }

  ngOnInit() {
    console.log("entro al init de  la busqueda")

  }

  
  getSearch(){
    this.topic.emit(this.search)
    console.log("entro a la busqueda DE " + this.search)
  }
}
