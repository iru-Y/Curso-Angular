import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myBoolean: string = "Yuri"
  value: boolean = false
  list = [1, 2, 3, 4]
  onSubmit () {
      if (this.value === false){
    this.myBoolean = "Gabriely Karen"
  }
    
}}
