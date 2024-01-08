import DataService from "../Model/DataService.js";
import IndexKartyaView from "../View/IndexKartyaView.js";

export default class Controller {
    constructor() {
        this.dataService = new DataService()

        this.dataService.getData("szemelynyts", this.megjelenit)
        
    }


    megjelenit(list) {
        console.log(list)
        for(var i=0;i<list.length; i++){
        new IndexKartyaView(i,list[i], $(".adatok"))
        }
    }
}