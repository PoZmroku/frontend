import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services';

export const canActivateCartGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const userEntry = localStorage.getItem('user');
    // const userService = inject(UserService);

    // //TODO: check if user's token is alive & valid

    // console.log(userService);

    // if (!userEntry) {
    //     return false;
    // }

    // const user = JSON.parse(userEntry);

    // if (!user.token) {
    //     return false;
    // }
    
    return true;
}