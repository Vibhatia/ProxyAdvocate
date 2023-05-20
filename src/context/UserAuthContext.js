import { createContext, useContext, useEffect, useState } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import {firebaseConfig} from '../firebase';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    // setUser({});

    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
      const auth = getAuth();
      const db = getDatabase();
      const uid = auth.currentUser.uid;
      
      // const userRef = ref(db, `userdata/${uid}`);
      // onValue(userRef, snapshot => {
      //   const userDataa = snapshot.val();
      //   setUserData(userDataa);
      //   console.log(userDataa);
      // });      
      onValue(ref(db,`userdata`),(snapshot)=>{
        const userDataa = snapshot.val();
        console.log(userDataa);
      }
  
    )});
  
    

    return () => {
      unsubscribe();
      // setUser("");
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
