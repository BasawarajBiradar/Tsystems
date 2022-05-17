import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { }

  getAddress(){
    let add={
      area: "baner",
      pincode: 3131,
      locality: "tower"
    };
  }

  getCompanyName(){
    return "T-Systems";
  }

}
