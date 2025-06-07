import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myBoolean: String = "Yuri";

  refreshBoolean(value: boolean): String {
    
     if (value === true){
    this.myBoolean = "Gaby"
  }
    return this.myBoolean
  };
}
