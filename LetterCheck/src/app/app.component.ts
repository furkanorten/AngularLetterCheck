import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  texts: Array<string> = [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet consectetur adipiscing',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor sit',
    'Lorem ipsum dolor sit amet consectetur',
  ]
  random: number = 0
  text: string = ''
  input: string = ''

  ngOnInit(): void {
    this.random =  Math.floor(Math.random() * this.texts.length-1);
    this.text = this.texts[this.random]
  }

  getInput(value: string) {
    this.input = value
  }

  compare(letter: string, inputLetter: string) {
    if(!inputLetter) {
      return 'pending'
    }
    return letter === inputLetter ? 'correct' : 'incorrect'
  }

}
