import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
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
  @Input({ required: true }) user!: User;
  // @Input({ required: true }) users!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>(); // EventEmitter();
  
  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  // using signal
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });
  // select = output<string>();

  onSelectUser() {
    this.select.emit(this.user.id);

    // without using signal
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];

    // using signal
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
