import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    message = 'Hello!';
    users: User[] = [
        { id: 25, name: 'Chris', username: 'Sevilha'},
        { id: 26, name: 'Chris2', username: 'Sevilha2'},
        { id: 27, name: 'Chris3', username: 'Sevilha3'},
        { id: 28, name: 'Chris4', username: 'Sevilha4'},
        { id: 29, name: 'Chris5', username: 'Sevilha5'},
        { id: 30, name: 'Chris6', username: 'Sevilha6'}
    ];
    activeUser: User;

    selectUser(user: User){
        this.activeUser = user;
    }

    onUserCreated(event){
        this.users.push(event.user)
    }
}
