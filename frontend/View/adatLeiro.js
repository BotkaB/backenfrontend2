export const adatLeiro = {
id: {
    megjelenes:"sorszám"
},



nev:{
    megjelenes:"Név",
    tipus: "text",
    placeholder: "Teszt Elek",
    pattern: "^[A-ZÁÉÍÓÖŐÚÜŰ][a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]{2,}",
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie.",
    required: true,
},

szulh:{
  megjelenes:"Születési hely",
  tipus: "text",
  placeholder: "Budapest",
  pattern: "^^[A-ZÁÉÍÓÖŐÚÜŰ][a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]{2,}",
  value: "",
  szoveg: "Legalább 3 betű, a településnek nagybetűvel kell kezdődnie.",
  required: true,
},



szulido:{
    megjelenes:"Születési idő",
    tipus: "date",
    value: "2000-01-01",
    pattern: {min: "1900-01-01", max:"2023-01-01"},
    szoveg: "1900 és 2023 közötti dátumot adhat meg",
    required: false,
   
},

anyjaneve:{
    megjelenes:"Anyja neve",
    tipus: "text",
    placeholder: "Más Nőinév",
    pattern: "^[A-ZÁÉÍÓÖŐÚÜŰ][a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]{2,}",
    value: "",
    szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie.",
    required: true,
},

kedvenc:{
    megjelenes:"Kedvenc",
   
},


};