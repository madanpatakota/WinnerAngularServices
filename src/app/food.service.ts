import { Injectable } from "@angular/core";
import { NotificationService } from "./notification-service";

@Injectable()
export class FoodService{

    constructor(public notificationService:NotificationService){
    }


    getFoodsList(){
        return "Veg-Meals";
    }

    getSweetsList(){
        return "some-sweets";
    }

    handleNotification(name:string){
           return  this.notificationService.getNotificationService(name);
    }

}
