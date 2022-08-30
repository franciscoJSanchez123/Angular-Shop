import { Injectable } from '@angular/core';
import {Item} from '../../models/item';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage-service/local-storage.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
}

@Injectable()
export class ItemService {
  url:string="https://nest-project.vercel.app/"
  constructor(
    private http:HttpClient,
    private localStorageService:LocalStorageService
    ) { }

 

  findAll(selection:string): Observable<Item[]>{
    console.log("aqui servicio item")
    console.log(selection)
    /*return this.http.get<Item[]>('http://localhost:3000/items/list/'+ selection)*/
    return this.http.get<Item[]>(`${this.url}items/list/${selection}`)

  }


  findId(id:string): Observable<Item>{
    console.log('aqui probando')
    console.log(id)
    /*return this.http.get<Item>('http://localhost:3000/items/'+id)*/
    return this.http.get<Item>(`${this.url}/items/`+id)
  }


  add(item:Item){
    this.setToken();
    /*return this.http.post('http://localhost:3000/items',item, httpOptions)*/
    return this.http.post(`${this.url}/items`,item, httpOptions)
  }


  delete(id:string){
    this.setToken();
    /*return this.http.delete('http://localhost:3000/items/'+id, httpOptions)*/
    return this.http.delete(`${this.url}/items/`+id, httpOptions)

  }


  update(id:string,item:Item){
    console.log("aqui item service")
    console.log(item)
    const {_id,...result}=item;
    console.log(result)
    console.log("aqui item service")
    this.setToken();
    /*return this.http.put('http://localhost:3000/items/'+id, result, httpOptions)*/
    return this.http.put(`${this.url}/items/`+id, result, httpOptions)

  }

  setToken(){
    const token=this.localStorageService.getToken()
    httpOptions.headers=httpOptions.headers.set('Authorization' , 'Bearer '+token)
  }

  

}
