import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";
import UrlapView from "../View/UrlapView.js"

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
          
        console.log ("controller")
        new UrlapView ($(".urlap"));

        $(window).on("ujAdatHozzaAdasa", (event)=>{
        console.log(event.detail)
        this.dataService.postData("szemelynyts", event.detail)
        })

    }


    megjelenit(list){
       // console.log(list)
        //példányosítjuk a view-t Táblázatot
        new TablaView(list, $(".adatok"))
    }
}