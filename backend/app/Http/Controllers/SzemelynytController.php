<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Szemelynyt;

class SzemelynytController extends Controller
{
    
        public function index(){
          
            return Szemelynyt::all();
        }
    
        public function show($id){
            $szemelynyt = response()->json(Szemelynyt::find($id));
            return $szemelynyt;
        }
    
        public function store(Request $request){
            $szemelynyt = new Szemelynyt();
          
            $szemelynyt->nev = $request->nev;
            $szemelynyt->szulh = $request->szulh;
            $szemelynyt->szulido = $request->szulido;
            $szemelynyt->anyjaneve = $request->anyjaneve;
           
            $szemelynyt->save();
            return $szemelynyt;
        }
    
        public function update(Request $request, $id){
            $szemelynyt = Szemelynyt::find($id);
           
            $szemelynyt->nev = $request->nev;
            $szemelynyt->szulh = $request->szulh;
            $szemelynyt->szulido = $request->szulido;
            $szemelynyt->anyjaneve = $request->anyjaneve;
            $szemelynyt->save();
            return $szemelynyt;
        }
    
        public function destroy($id){
            szemelynyt::find($id)->delete();
            return "Sikeres törlés";
        }
}
