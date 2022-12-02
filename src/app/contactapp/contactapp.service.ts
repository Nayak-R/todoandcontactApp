import { Injectable } from "@angular/core";
import { DataService } from "../data.service";
import { UrlConstantService } from "../url-constant.service";

@Injectable()
export class ContactappService {

    constructor(private url: UrlConstantService, private dataService : DataService){}

    addContact(contact: any){
        return this.dataService.addObject(this.url.SERVER_PORT+'contactapp' , JSON.stringify(contact) )
    }

    updateContact(contact: any, id: any){
        return this.dataService.updateObject(this.url.SERVER_PORT+'contactapp/'+id, JSON.stringify(contact) )
    }

    deleteContact(id:any){
        return this.dataService.deleteObject(this.url.SERVER_PORT+'contactapp/'+id)
    }

    getAllContacts(){
        return this.dataService.getAllObjects(this.url.SERVER_PORT+'contactapp')
    }

    getContactById(id:any){
        return this.dataService.getObjectById(this.url.SERVER_PORT+'contactapp/'+id)
    }
}