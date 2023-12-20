import {adatLeiro} from "./adatLeiro.js";
import TextUrlapView from "./TextUrlapView.js";
import NumberUrlapView from "./NumberUrlapView.js";
import DatumUrlapView from "./DatumUrlapView.js";


export default class UrlapView {
  #urlapValid = false;
  #formAdat = {};
 
  #id;
 
  #inputElemObjektumokLista = [] // itt tároljuk azokat az objerktumokat, amelyek létrehozzák a form elemeket
  constructor(szuloelem) {
    szuloelem.append("<form>");
    this.formElem = szuloelem.find("form")
    console.log(this.formElem);
    this.htmlOsszeallit();

    /***submit gomb kezelése
     * 1.létrehozom a gombhoz a kapaszkodót
     * 2. hozzárendelem az eseményt
     * 3. ebben az eseményben összegyűjtöm a form elemeit
     * 4. és elküldöm a kontrollernek.
     */

    this.submitElem = this.formElem.find("#submit");
    console.log(this.submitElem);
    /*this.nevElem = this.formElem.find("#nev");
    this.szulEvElem = this.formElem.find("#szul_ev");*/
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#urlapValid = true;
      this.#inputElemObjektumokLista.forEach((elem) => {
       
        this.#formAdat[elem.key] = elem.getValue()
        this.#urlapValid=this.#urlapValid && elem.getValid()
      
      })

     
      console.log(this.#formAdat);
      if (this.#urlapValid){
      this.trigger("ujAdatHozzaAdasa");

      }else{
        console.log("Nem valid az űrlap.")
      }
    })

    this.modositElem = this.formElem.find("#modosit");
    console.log(this.modositElem);
    
    this.modositElem.on("click", (event) => {
      event.preventDefault();
      this.#urlapValid = true;
      this.#inputElemObjektumokLista.forEach((elem) => {
        console.log(elem)
        this.#formAdat[elem.key] = elem.getValue()
        this.#urlapValid=this.#urlapValid && elem.getValid()
  
      })
      this.#formAdat['id']=this.#id
      console.log(this.#formAdat);
      if (this.#urlapValid){
      this.trigger("adatModositasa");

      }else{
        console.log("Nem valid az űrlap.")
      }
    })

   
  }

  
  


  trigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#formAdat })
    window.dispatchEvent(e);
  }


  htmlOsszeallit() {
    let txt = "";

    for (const key in adatLeiro) {
      switch (adatLeiro[key].tipus) {
        case "text":
          this.#inputElemObjektumokLista.push(new TextUrlapView(this.formElem, adatLeiro[key], key))
          break;
        case "number":
          this.#inputElemObjektumokLista.push(new NumberUrlapView(this.formElem, adatLeiro[key], key))
          break;
        case "date":
          this.#inputElemObjektumokLista.push(new DatumUrlapView(this.formElem, adatLeiro[key], key))
          break;

        default:
          break;
      }

    }

    //console.log(this.#inputElemObjektumokLista)


    txt += `<div class="mb-3 mt-3">
   
    
    <button type="submit" id="submit" class="btn btn-primary">Létrehoz</button>
    <button type="submit" id="modosit" class="btn btn-primary">Módosít</button>
    </div>`
    this.formElem.append(txt)
  }

  beTolt(sor){
    console.log(sor)
    this.#inputElemObjektumokLista[0].setValue(sor.nev)
    this.#inputElemObjektumokLista[1].setValue(sor.szulh)
    this.#inputElemObjektumokLista[2].setValue(sor.szulido)
    this.#inputElemObjektumokLista[3].setValue(sor.anyjaneve)
    this.#id=sor.id

  }
}
