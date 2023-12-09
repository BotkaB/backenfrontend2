export const adatLeiro = {
    id: 
    {megjelenes:"sorszám"},



 nev:{
    megjelenes:"Név",
    tipus: "text",
    placeholder: "Teszt Elek",
    pattern: "^[A-Z][a-z]{3}",
    value: "",
    szoveg: "Legalább 4 betű, a névnek nagybetűvel kell kezdődnie.",
    required: true,
},

szulh:{
  megjelenes:"Születési hely",
  tipus: "text",
  placeholder: "Budapest",
  pattern: "^[A-Z][a-z]{3}",
  value: "",
  szoveg: "Legalább 3 betű, a településnek nagybetűvel kell kezdődnie.",
  required: true,
},



szuli:{
    megjelenes:"Születési idő",
    tipus: "number",
    value: "2000",
    pattern: {min: "1900", max:"2023"},
    szoveg: "1900 és 2023 közötti számot adhat meg",
    required: false,
   
},

anyjaneve:{
    megjelenes:"Anyja neve",
    tipus: "text",
    placeholder: "Más Nőinév",
    pattern: "^[A-Z][a-z]{3}",
    value: "",
    szoveg: "Legalább 4 betű, a névnek nagybetűvel kell kezdődnie.",
    required: true,
},


};