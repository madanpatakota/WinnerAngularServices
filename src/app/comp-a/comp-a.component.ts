import { Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent {

    message = "" ;

    constructor(public foodservice:FoodService){

    }

    getOrders(){
       this.message = this.foodservice.getFoodsList();
    }

   //  ''

   //  ""

   //  `${_____}`


    notificationMesage = "";
    checkNotifications(){
       this.notificationMesage = this.foodservice.handleNotification(`Comp-A ${this.message}`);
    }



}
