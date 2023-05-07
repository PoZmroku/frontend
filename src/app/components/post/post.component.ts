import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { IPost } from 'src/app/interfaces';

@Component({
  selector: 'app-post',
  styleUrls: ['./post.component.scss'],
  template: `
    <div class="container">
    <ng-container  *ngIf="post$ | async as post else postNotFound">
      <mat-card>
        <div class="post">
          <mat-form-field appearance="outline">
            <mat-label>Название статьи</mat-label>
            <input matInput [ngModel]="post.title" readonly>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Текст статьи</mat-label>
            <input matInput [ngModel]="post.text" readonly>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Теги</mat-label>
            <input matInput [ngModel]="post.tags" readonly>
          </mat-form-field>
        </div>
      </mat-card>
    </ng-container>
  </div>

  <ng-template #postNotFound>
      <mat-card>
        <div class="post">
          POST NOT FOUND
        </div>
      </mat-card>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  
  

  post$: Observable<IPost> = this._activatedRoute.data.pipe(map(({post}) => post));
  postSubscription: Subscription;


  constructor(
    private _activatedRoute: ActivatedRoute
  ) {}

}
