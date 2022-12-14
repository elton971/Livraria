

import {Book_Card} from "../components/Book_Card";
import React, {useEffect, useState} from "react";
import Nav_Bar from "../components/Nav_Bar";
import {useAuth} from "../hook/useAuth";
import {InputAdornment} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Input from "@mui/material/Input";
export function Home_Page(){
	
	const [search,setSearch]=useState<boolean>(false)
	let [filter,setFilter]=useState<any>([])
	const [checked, setChecked] =useState(true);
	const[showInput,setShowInput]=useState<any>(["Romance","Drama","Novela","Conto","Cronica","Poesia"])
	const {data}=useAuth();
	
	
	function filterByGenre(genreSend:string){
		filter.length=0
		data.map((element:any)=>{
			if(element.genre==genreSend)
			{
				console.log(filter)
				filter.push(element)
			}
		})
	}
	return(
		<div className={''}>
			<div className={'fixed float-left bg-rose-100 h-screen w-[15rem] p-8'}>
				<div className={'mb-4'}>
					<p className={'text-[0.9rem]'}>Biblioteca digital</p>
				</div>
				<div>
					<p  className={'mb-4 text-[0.9rem]'}>Filtrar por</p>
					<div className={'ml-5'}>
						<div  className={'flex flex-col gap-4 text-gray-600'}>
							<label className={'text-[0.8rem]'}>Autor</label>
							<Input type={'text'} placeholder={'procurar'}
							       className={'input_Config w-full '}
							       startAdornment={
								       <InputAdornment position="start">
									       <SearchTwoToneIcon />
								       </InputAdornment>
							       }
							/>
						</div>
						<div className={'flex flex-col gap-4 text-gray-600'}>
							<label className={'text-[0.8rem]'}>Ano da publicacao</label>
							<Input type={'text'} placeholder={'procurar'}
							       className={'input_Config w-full '}
							       startAdornment={
								       <InputAdornment position="start">
									       <SearchTwoToneIcon />
								       </InputAdornment>
							       }
							/>
						</div>
						<div>
							<p className={'text-gray-600 text-[0.8rem] mb-4'}>Genero</p>
							{
								showInput.map((element:any)=>{
									return (
										<div className={'mb-4'}>
											<input type={'checkbox'}
											       defaultChecked={!checked}
											       onClick={()=> {
												       setChecked(!checked)
												       console.log(checked)
												       if(checked)
												       {
													       filterByGenre(element)
													       setSearch(true);
												       }
											       }}
											       className={'mx-2 cursor-pointer text-[0.8rem]'}/>
											<label className={'text-gray-500 cursor-pointer text-[0.8rem]'} >{element}</label>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
			<div className={'ml-[16rem]'}>
				<Nav_Bar key={1} />
				{
					!search ?(
					<div className={'mx-8 grid grid-cols-4 gap-3'}>
						{
							data.map((element:any)=>{
								return <Book_Card element={element}/>
							})
						}
					</div>):(
						<div className={'mx-8 grid grid-cols-4 gap-3'}>
							{
								filter.map((element:any)=>{
									console.log(element)
									return <Book_Card element={element}/>
								})
							}
						</div>
					)
					
				}
			</div>
		</div>
	)
}