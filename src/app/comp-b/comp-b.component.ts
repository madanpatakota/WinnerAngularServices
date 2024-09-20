import { Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css'
})
export class CompBComponent {

  constructor(public sweetservice:FoodService){

  }


  message= "";

  getSweetOrders(){

   this.message = this.sweetservice.getSweetsList();

  }


}
