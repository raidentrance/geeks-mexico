import {Component}from '@angular/core';
//Decorator
@Component({
    selector:'app-posts',
    templateUrl:'./posts.component.html'
}) 
export class PostsComponent{
    title = 'Posts';
}