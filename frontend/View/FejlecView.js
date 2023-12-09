export default class FejlecView {
    #obj = {};
    constructor( obj, szuloElem) {
      this.#obj = obj;
      console.log(obj)
      
      this.szuloElem = szuloElem;
    
      this.htmlOsszerak();
    }
    htmlOsszerak() {
      let txt="<tr>"
      for (const key in this.#obj) {
          txt+=`<th>${this.#obj[key].megjelenes}</th>`
      }
  
      txt+="</tr>"
   
      this.szuloElem.append(txt)
    }
  }