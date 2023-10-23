import { Component, OnDestroy } from '@angular/core';
import { UsersRequest } from './Models/users-request.models';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnDestroy {

  model: UsersRequest;
  private addAdminSubscription?: Subscription;

  constructor(private userService: UserService){
    this.model = {
      FirstName: '',
      LastName: '',
      Username: ''
    };
  }
  

  onFormSubmit(){
    this.addAdminSubscription = this.userService.addAdmin(this.model)
    .subscribe({
      next: (response) => {

        console.log('Registered succesfully!');

      },
  })
  }

  ngOnDestroy(): void {
    this.addAdminSubscription?.unsubscribe();
  }

}
