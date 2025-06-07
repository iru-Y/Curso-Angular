import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myBoolean: string = "Yuri"

  refreshBoolean(value: boolean): string {
    
     if (value === true){
    this.myBoolean = "Gabriely Karen"
  }
    return this.myBoolean
  };

  onSubmit () {
    this.refreshBoolean(true)
}}
