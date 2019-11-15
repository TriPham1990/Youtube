import { Component, OnInit } from '@angular/core';
import {YoutubeServiceService} from '../youtube-service.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {

  constructor(public youtubeService: YoutubeServiceService) { }

  ngOnInit() {
  }

}
