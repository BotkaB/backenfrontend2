import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";

export default class  Controller{
    constructor(){
        this.dataService=new DataService()

        this.dataService.getData("szemelynyts", this.megjelenit)
        $(window).on("sorTorles",(e)=>{
            console.log(e.detail)
            this.dataService.deleteData("szemelynyts", e.detail)
            /* location.reload(); */
            //this.dataService.getData("szemelynyts", this.megjelenit)
        })
    }


    megjelenit(list){
       // console.log(list)
        //példányosítjuk a view-t Táblázatot
        new TablaView(list, $(".adatok"))
    }
}