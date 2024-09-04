import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithPopup,
        GoogleAuthProvider,
        signOut,
        User
 } from '@angular/fire/auth';

export interface loginInfo{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private auth: Auth) { }

  register({email, password}: loginInfo):Promise<any>{
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}:loginInfo):Promise<any>{
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle(): Promise<any>{
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logout({email, password}:loginInfo):Promise<any>{
    return signOut(this.auth);
  }

  getCurrentUser() : User | null {
    return this.auth.currentUser;
  }
}
