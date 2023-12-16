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
       
        
        })

        $(window).on("sorModosit",(e)=>{
            $("#submit").slideToggle()
            $("#modosit").slideToggle()
            console.log(e.detail)
            this.urlap.beTolt(e.detail)
        
       
        })
          
       
      

        $(window).on("ujAdatHozzaAdasa", (event)=>{
        console.log(event.detail)
        this.dataService.postData("szemelynyts", event.detail)
        
        })

        $(window).on("adatModositasa", (event)=>{
            console.log(event.detail)
            this.dataService.putData("szemelynyts", event.detail)
            })
    

        $(".gomb button").on("click",function (){
            $(".urlap").slideToggle()
            $("#modosit").slideToggle()
            
            })
    

    }


    megjelenit(list){
       // console.log(list)
        //példányosítjuk a view-t Táblázatot
        new TablaView(list, $(".adatok"))
    }
}