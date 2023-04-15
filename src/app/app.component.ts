import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  num : number = 0;
  numbers : Array<number> = new Array<number>();
  
  generateRandomNumber() {
   this.num += Math.floor(Math.random() * 100) + 1;
   if(this.num > Math.floor(Math.random() * 100) + 1) {
    alert('A számítógép nagyobb számra gondolt!!!');
   } else {
    alert('A számítógép kisebb számra gondolt!!!');
   
  } if (this.num == Math.floor(Math.random() * 100) + 1 ) {
    alert('A számítógép ugyan arra a számra gondolt!');  
   }
}   

  setValue(x : HTMLInputElement) {
    this.num = parseInt(x.value);
    this.numbers.push(this.num);
  }
}