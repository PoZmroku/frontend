import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserStateService } from '../services';
import { map } from 'rxjs';

export const canActivateLoginGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const _userState = inject(UserStateService);
    
    return _userState.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));
}