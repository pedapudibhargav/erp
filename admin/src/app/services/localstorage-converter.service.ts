import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageConverterService {

  constructor() { }

  setJsonObjectToKey(keyIn:string, jsonObjIn:any){
    localStorage.setItem(keyIn, JSON.stringify(jsonObjIn));
    return true;
  }
  getJsonObjectByKey(keyIn:string){
    return JSON.parse(localStorage.getItem(keyIn));
  }
}
