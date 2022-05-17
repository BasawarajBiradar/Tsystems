import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userServ: UserProfileService) {
    let ref= this.userServ.getCompanyName();
    console.log(ref);
   }

  ngOnInit(): void {
  }

}
