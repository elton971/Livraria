import { useState, createContext, useEffect, ReactNode } from "react";
interface ApiProviderProps{
	children:ReactNode;
}
interface ApiContextData {
	data:any;
	FavBook:any;
	setFavBook:(t:any)=>void;
}
export const ApiContext = createContext({} as ApiContextData);
export const ApiContextProvider = ({ children }:ApiProviderProps) => {
	
	const [data,setData]=useState<any>([]);
	const [FavBook,setFavBook]=useState<any>([]);
	
	useEffect(()=>{
		fetch(
			`/src/App/services/Api.json`
		)
			.then((res) => res.json())
			.then((data) => {
				setData(data.books)
			});
	},[])
	
	return (
		<ApiContext.Provider value={{
			data,
			FavBook,
			setFavBook
		}}>
			{children}
		</ApiContext.Provider>
	);
};
