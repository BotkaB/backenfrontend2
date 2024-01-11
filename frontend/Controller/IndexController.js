import DataService from "../Model/DataService.js";
import IndexKartyaView from "../View/IndexKartyaView.js";

export default class Controller {
 
    constructor() {
        this.dataService = new DataService()
        this.dataService.getData("szemelynyts", this.megjelenit)
        $(".kedvencek").slideToggle()
       
        $(window).on("kedveles", (event) => {
            console.log(event.detail)
            this.dataService.putData("szemelynyts", event.detail)
          
        })


        $(".gomb button").on("click", function () {
      
            $(".gomb").slideToggle()
            $(".adatok").slideToggle()
            $(".kedvencek").slideToggle()
            $(".kedvenc").slideToggle()
            $(".eltavolit").slideToggle()
            
           
        })

        
        
    }
   

    megjelenit(list) {


        console.log(list)
        for (var i = 0; i < list.length; i++) {
            new IndexKartyaView(i, list[i], $(".adatok"))
           
            if (list[i].kedvenc == true) {
                new IndexKartyaView(i, list[i], $(".kedvencek"))
                
            }
        }
        $(".eltavolit").slideToggle()
       
    }
 
  
}