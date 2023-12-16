export default class SorView {
    #obj = {};
    constructor(index, obj, szuloElem) {
      this.#obj = obj;
      this.index = index;
      this.szuloElem = szuloElem;
      //console.log(this.#obj);
      this.htmlOsszerak();
      //megfogjuk a törlés gombot
      this.torlesElem=this.szuloElem.find(".torles:last")
     /*  console.log(this.torlesElem) */
      this.torlesElem.on("click",()=>{
        //console.log("törlés")
        this.trigger("sorTorles")
      })

      this.modositElem=this.szuloElem.find(".modosit:last")
     
       this.modositElem.on("click",()=>{
         
         this.trigger("sorModosit")
       })
  
    }
  
    trigger(e){
      const esemenyem=new CustomEvent(e,{detail:this.#obj})
      window.dispatchEvent(esemenyem)
    }
  
    htmlOsszerak() {
      let txt="<tr>"
      for (const key in this.#obj) {
        //console.log(key)
        if (key=="created_at" || key=="updated_at")
        {}
        else{
          txt+=`<td>${this.#obj[key]}</td>`
        }
      }

      txt+=`<td><button type="button" class="modosit btn btn-warning">Módosít</button></td>`
      txt+=`<td><button type="button" class="torles btn btn-danger">Törlés</button></td>`
    
     

      txt+="</tr>"
      //console.log(txt)
      this.szuloElem.append(txt)
    }
  }