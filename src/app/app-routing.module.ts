import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PlayListComponent} from './play-list/play-list.component';
import {PlayerComponent} from './player/player.component';


const routes: Routes = [
  {
    path: 'youtube',
    component: PlayListComponent,
    children: [{
      path: ':id',
      component: PlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
