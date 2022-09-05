import React, { useEffect, useState, createContext } from "react";
import {auth} from '../firebase';
import {signInWithEmailAndPassword,signOut } from "firebase/auth";

export type AuthContextProps = {
    username: string | undefined;
    email: string | undefined;
	Login: Function;
	SignOut:Function;
};


type props={
	children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
	
export const AuthProvider = ({children}:props) =>{

	const Login = (email: string | undefined,password: string | undefined) => {
		return signInWithEmailAndPassword(auth,email!,password!);
	}

	const SignOut = (auth: any) => {
		return signOut(auth);
	}

	const[username,setUsername] = useState<string|undefined>()
	const[email,setEmail] = useState<string|undefined>()

	useEffect(() =>{
		const unscubscribe = auth.onAuthStateChanged(user=>{
			setUsername(user?.displayName!);
			setEmail(user?.email!);
		})
		return unscubscribe;
	},[])	


	return (
		<AuthContext.Provider value={{username,email,Login,SignOut}}>
			{children}
		</AuthContext.Provider>
  )
}