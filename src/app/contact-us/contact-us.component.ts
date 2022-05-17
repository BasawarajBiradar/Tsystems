import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private userServ: UserProfileService) { 
    let ref= this.userServ.getAddress();
    console.log(ref);
  }

  ngOnInit(): void {
  }

}
