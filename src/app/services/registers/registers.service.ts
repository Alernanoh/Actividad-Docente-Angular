import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UsersService, loginInfo } from '../users/users.service';
import { UserCredential } from '@angular/fire/auth';

export interface Register {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  currentRegister?: Register;

  constructor(private firestore: Firestore, private usersService: UsersService) { }

  getRegisters(): Observable<Register[]> {
    const registersRef = collection(this.firestore, 'registers');
    return collectionData(registersRef, {idField: 'uid'});
  }


  async createRegister(loginInfo : loginInfo, {email, password}: Register) : Promise<any> {
    const userCredential : UserCredential = await this.usersService.register(loginInfo)
      .catch((error) => {
        console.log(error);
        return error;
      });
    const uid = userCredential.user.uid;
    this.currentRegister = {email,password};
    const registersRef = collection(this.firestore, 'registers');
    return addDoc(registersRef, {email,password});
  }

}
