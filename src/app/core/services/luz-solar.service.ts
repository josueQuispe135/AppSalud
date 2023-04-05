import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection,query,orderBy, Firestore, addDoc, collectionData, onSnapshot } from '@angular/fire/firestore';
import { Ejercicio } from '../models/ejercicio';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LuzSolarService {

  constructor(private store: AngularFirestore,private firestore: Firestore,
    private tokenStorage: TokenStorageService ){ }

    create(data:any):Observable<any>{
      let ref={
        user_id: this.tokenStorage.getId(),
        fecha:data['fecha'],
        hora:data['hora'],     
       }     

      return of(this.store.collection('luz_solar').add(ref))

    }

}
