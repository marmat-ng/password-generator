import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSpecials = false;

  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSpecials() {
    this.includeSpecials = !this.includeSpecials;
  }

  onChangeLength(eventTarget: EventTarget) {
    const value: string = (eventTarget as HTMLInputElement).value;

    if (Number.isInteger(Number(value))) {
      this.passwordLength = parseInt(value);
    }
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const specials = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSpecials) {
      validChars += specials;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }
}
