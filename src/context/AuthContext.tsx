import React, { useEffect, useState, createContext } from "react";
import {auth} from '../firebase';
import {signInWithEmailAndPassword,signOut } from "firebase/auth";

export type AuthContextProps = {
    username: string | undefined;
	userToken:string | undefined;
    email: string | undefined;
	Login: Function;
	SignOut:Function;
};


type props={
	children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
	
export const AuthProvider = ({children}:props) =>{

	const Login = async (email: string | undefined,password: string | undefined) => {
		const res = await signInWithEmailAndPassword(auth,email!,password!);
	}

	const SignOut = (auth: any) => {
		return signOut(auth);
	}

	const[username,setUsername] = useState<string|undefined>()
	const[email,setEmail] = useState<string|undefined>()
	const [userToken,setUserToken] = useState<string|undefined>()
	
	useEffect(() =>{
		const unscubscribe = auth.onAuthStateChanged(user=>{
			setUsername(user?.displayName!);
			setEmail(user?.email!);
			user?.getIdToken().then((idToken)=>{
				setUserToken(idToken);
				sessionStorage.setItem('user', idToken);
			});
		})
		return unscubscribe;
	},[])	


	return (
		<AuthContext.Provider value={{username,email,Login,SignOut,userToken}}>
			{children}
		</AuthContext.Provider>
  )
}