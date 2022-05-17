import { Injectable } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class BasseConfigService {

   url="www.something";

  constructor(private userserv: UserProfileService) {
    let user = this.userserv.getAddress();
    console.log(user);
  }

  
}
