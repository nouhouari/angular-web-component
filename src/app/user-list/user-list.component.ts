import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UserPage } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  data: any;
  pageNumber: number = 0;
  page: UserPage;

  // This will be an input of the web component as well
  @Input()
  title: string;

  @Output()
  onSelect: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers() {
    this.userService.loadUsers(this.pageNumber).subscribe(
      page => this.page = page
    );
  }

  /**
   * Emit event when a user is clicked
   * @param user 
   */
  public onUserClicked(user: User){
    this.onSelect.emit(user);
    console.log('User is clicked = ' + user.id);
  }

  public save(){
    console.log(this.data);
    localStorage.setItem('DATA', this.data);
  }
}
