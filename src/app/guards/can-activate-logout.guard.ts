import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserStateService } from '../services';

export const canActivateLogoutGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const _userState = inject(UserStateService);

    return _userState.isLoggedIn$;
}