import DataService from "../Model/DataService.js";
import IndexKartyaView from "../View/IndexKartyaView.js";

export default class Controller {
    constructor() {
        this.dataService = new DataService()

        this.dataService.getData("szemelynyts", this.megjelenit)
     
        $(window).on("kedveles", (event) => {
           console.log(event.detail)
            this.dataService.putData("szemelynyts", event.detail)
        })
    }


    megjelenit(list) {
        console.log(list)
        for(var i=0;i<list.length; i++){
        new IndexKartyaView(i,list[i], $(".adatok"))
        if(list[i].kedvenc=true)
        {new IndexKartyaView(i,list[i], $(".kedvencek"))}
        }
    }
}