export default class IndexKartyaView {
  #obj = {};

  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;


    this.htmlOsszerak();

    this.szuloElem.find(".kedvenc:last").on("click", () => {
      this.#obj.kedvenc = 1;
      this.trigger("kedveles"); 
   
    })
    this.szuloElem.find(".eltavolit:last").on("click", () => {
      this.#obj.kedvenc = 0;
      this.trigger("kedveles");
     
    })


  }


  htmlOsszerak() {

    let txt = ""

    txt += `
    
    
    <div class="col">
  
  <div  class="card h-100" " style="max-width: 19rem">
  
  <h5 class="card-header"   >${this.#obj.nev}</h5>

<div class="card-body" >
<p class="card-text">${this.#obj.szulido}</p>
<p class="card-text">${this.#obj.szulh}</p>
<p class="card-text">${this.#obj.anyjaneve}</p>
</div>
<div class="card-footer">
<button class="kedvenc btn btn-outline-primary"   >Kedvencek</button>
<button class="eltavolit btn btn-outline-primary" >Eltávolít</button>
</div>
</div>

</div>`


      ;
     
  this.szuloElem.append(txt)
   this.kedvencGomb=this.szuloElem.find('.kedvenc:last')
   this.eltavolitGomb=this.szuloElem.find('.eltavolit:last')
   console.log(this.#obj)

   if(this.#obj.kedvenc==1){
    this.kedvencGomb.hide()
   }
   else{
    this.eltavolitGomb.hide()
   }
  }




  trigger(e) {
    const esemenyem = new CustomEvent(e, { detail: this.#obj })
    window.dispatchEvent(esemenyem)

  }
}

