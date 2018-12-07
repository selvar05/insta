import { FavouritesComponent } from './favourites/favourites.component';
import { MypostsComponent } from './myposts/myposts.component';
import { FollowingComponent } from './following/following.component';
import { PostsComponent } from './posts/posts.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'posts',component:PostsComponent},
  {path:'following',component:FollowingComponent},
  {path:'favourites',component:FavouritesComponent},
  {path:'myposts',component:MypostsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
