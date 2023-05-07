import { Component } from '@angular/core';
import { Observable, share } from 'rxjs';
import { IPosts } from 'src/app/interfaces/IPosts';
import { UserStateService } from 'src/app/services';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  styleUrls: ['./posts.component.scss'],
  template: `
  <button class="button" mat-button *ngIf="isLoggedIn$ | async" [routerLink]="['add']">Добавить статью</button>
  <div class="container" fxLayout="row wrap" fxLayoutAlign="center center" fxLayoutGap="25px" *ngFor="let post of posts$ | async">
    <mat-card class="example-card">
      <mat-card-header>
        <img class="image" mat-card-image src=""/>
        <mat-card-title>{{post.title}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>#{{post.tags}}</p>
      </mat-card-content>
      <mat-card-actions>
        <button class="button" mat-button [routerLink]="['..', 'posts', post._id]">Посмотреть</button>
      </mat-card-actions>
    </mat-card>
  </div>
  `
})
export class PostsComponent {

  isLoggedIn$ = this._state.isLoggedIn$.pipe(share());

  posts$: Observable<IPosts[]> = this._postService.getAll();

  constructor(
    private _postService: PostService,
    private _state: UserStateService
  ) {}

}
