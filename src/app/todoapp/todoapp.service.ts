import { Injectable } from "@angular/core";
import { DataService } from "../data.service";
import { UrlConstantService } from "../url-constant.service";

@Injectable()
export class TodoappServer {

    constructor(private url: UrlConstantService, private dataService : DataService){}

    addTask(tasklist: any){
        return this.dataService.addObject(this.url.SERVER_PORT+'todoapp' , JSON.stringify(tasklist) )
    }

    updateTask(tasklist: any, id: any){
        return this.dataService.updateObject(this.url.SERVER_PORT+'todoapp/'+id, JSON.stringify(tasklist) )
    }

    deleteTask(id:any){
        return this.dataService.deleteObject(this.url.SERVER_PORT+'todoapp/'+id)
    }

    getAllTask(){
        return this.dataService.getAllObjects(this.url.SERVER_PORT+'todoapp')
    }

    getTaskById(id:any){
        return this.dataService.getObjectById(this.url.SERVER_PORT+'todoapp/'+id)
    }

}