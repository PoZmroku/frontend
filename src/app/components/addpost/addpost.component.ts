import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editor } from 'ngx-editor';
import { Observable, switchMap, tap } from 'rxjs';
import { IPost } from 'src/app/interfaces';
import { PostService } from 'src/app/services/post.service';
import { toHTML } from 'ngx-editor';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit, OnDestroy {

  form: { title: string, text: string , tags: string } = {} as IPost;

  post$: Observable<any>;

  editor: Editor | undefined;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }


  ngOnDestroy(): void {
    this.editor?.destroy();
  }


  constructor(
    private _postService: PostService,
    private _router: Router
  ) {}

  post() {
    if (!this.form){
      return;
    }

    this.post$ = this._postService.create(this.form as IPost).pipe(tap(() => {
      alert('Пост успешно добавлен.');
      this._router.navigate(['/posts']);
    }));

}
}
