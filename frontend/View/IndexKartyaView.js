export default class IndexKartyaView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;
    //console.log(this.#obj);
    this.htmlOsszerak();


  }

  /* trigger(e){
     const esemenyem=new CustomEvent(e,{detail:this.#obj})
     window.dispatchEvent(esemenyem)
   }*/

  htmlOsszerak() {
    let txt = `
 
        <div  class="card h-100" " style="max-width: 19rem">
  
        <h5 class="card-header"   >${this.#obj.nev}</h5>

<div class="card-body" >

<p class="card-text">${this.#obj.szulido}</p>
<p class="card-text">${this.#obj.szulh}</p>
<p class="card-text">${this.#obj.anyjaneve}</p>
</div>
<div class="card-footer">

<button class="kedvenc btn btn-outline-primary"  >Kedvencek</button>

</div>

      </div>`;


    this.szuloElem.append(txt)

    this.szuloElem.find(".kedvenc:last").on("click", () => {
      this.#obj.kedvenc=true;
      this.trigger("kedveles")
      console.log("gomb")
      
    })

  }

  trigger(e) {
    const esemenyem = new CustomEvent(e, { detail: this.#obj })
    window.dispatchEvent(esemenyem)

  }
}

