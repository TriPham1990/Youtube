import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeServiceService {

  playlist = [
    {id: 'ShVRP09NCO4', song: 'T-ARA(티아라) _ Sexy Love (Dance Ver. MV)'},
    {id: 'Dp9G5PUZi3A', song: 'Axel and Romina l Climax - Usher l BachataZouk Sexy dance 2017'},
    {id: 'tFSxwRBqO0c', song: 'Radioactive Sexy Dance Audition | Got Talent Global'},
    {id: 'HGzVFjjfAfw', song: 'Janet Jackson - Would You Mind - Choreography by Aliya Janell - #TMillyTV #Dance'},
    {id: 'hzhwgUTPc', song: 'HOW TO DANCE SEXY FOR YOUR MAN (VALENTINES DAY TIPS) | Kryssss'},
    {id: 'eRFLJP-N18s', song: '10 Sexy DANCE MOVES BANNED In KOREA'}
  ];

  constructor() { }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
