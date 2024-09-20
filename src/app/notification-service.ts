import { Injectable } from "@angular/core";

@Injectable()
export class NotificationService{


    getNotificationService(name : string){
           return `Hi ${name} , Your order is completed.`;
    }


}