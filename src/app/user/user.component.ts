import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // without using signal
  // selectedUser = DUMMY_USERS[randomIndex];
  // get imagePath() {
  //   return 'users/' + this.selectedUser.avatar;
  // }

  // using signal
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'users/' + this.selectedUser().avatar);

  // without using signal
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) users!: User;
  // @Input({ required: true }) users!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };
  @Output() select = new EventEmitter<string>(); // EventEmitter();
  
  get imagePath() {
    return 'users/' + this.users.avatar;
  }

  // using signal
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });
  // select = output<string>();

  onSelectUser() {
    this.select.emit(this.users.id);

    // without using signal
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];

    // using signal
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
