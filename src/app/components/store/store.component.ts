import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent implements OnInit {

  constructor(
    private _userService: UserService
  ) {}

  ngOnInit(): void {
      // this._userService.me().subscribe({
      //   next: (user) => console.log(user),
      //   error: () => {},
      //   complete: () => {}
      // });
  }
}
