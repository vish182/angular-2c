import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration / Login';
  users: Array<String> = [];
  passwords: Array<String> = [];
  username: String = "";
  password: String = "";
  status: String = "";

  add: Function = () => {
    this.users.push(this.username);
    this.passwords.push(this.password);
    this.username = ""
    this.password = ""
  }

  deleteFunc: Function = (user: String) => {
    const index: number = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.passwords.splice(index, 1);
  }

  check() {
    let n = this.users.length;

    for (let i = 0; i < n; i++) {
      if (this.username == this.users[i]) {
        console.log(this.username + " " + this.users[i])
        console.log(this.password + " " + this.passwords[i])
        if (this.password == this.passwords[i]) {
          this.status = "Logged In"
          return;
        } else {
          this.status = "Not Logged In: Incorrect Password"
          return;
        }
      }
    }
    this.status = "Not Logged In: User Not found"
    return;
  }
}
