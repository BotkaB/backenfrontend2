import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";
import UrlapView from "../View/UrlapView.js"

export default class  Controller{
    constructor(){
        this.dataService=new DataService()

        this.dataService.getData("szemelynyts", this.megjelenit)
        this.urlap=new UrlapView ($(".urlap"));
        $(window).on("sorTorles",(e)=>{
            console.log(e.detail)
            this.dataService.deleteData("szemelynyts", e.detail.id)
            /* location.reload(); */
            //this.dataService.getData("szemelynyts", this.megjelenit)

        
        })

        $(window).on("sorModosit",(e)=>{
            console.log(e.detail)
            this.urlap.beTolt(e.detail)
           
            /* location.reload(); */
            //this.dataService.getData("szemelynyts", this.megjelenit)

        
        })
          
        console.log ("controller")
      

        $(window).on("ujAdatHozzaAdasa", (event)=>{
        console.log(event.detail)
        this.dataService.postData("szemelynyts", event.detail)
        })

        $(".gomb button").on("click",function (){
            $(".urlap").slideToggle()
            
            })
    

    }


    megjelenit(list){
       // console.log(list)
        //példányosítjuk a view-t Táblázatot
        new TablaView(list, $(".adatok"))
    }
}