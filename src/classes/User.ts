import * as readline from 'readline';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class User {
  // declaring global variables
  firstname: string;
  lastname: string;
  email: string;

  constructor();

  constructor(firstname: string, lastname: string, email: string);

  constructor(firstname?: string, lastname?: string, email?: string) {
    if (firstname && lastname && email) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
    }
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  // create a new user
  static promptUser(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
      });
    });
  }

  static async getUserData() {
    const firstName = await User.promptUser('Enter your first name: ');
    const lastName = await User.promptUser('Enter your last name: ');
    const email = await User.promptUser('Enter your email: ');

    const user = new User(firstName, lastName, email);
    return user;
  }
}
