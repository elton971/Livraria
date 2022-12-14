

import {Book_Card} from "../components/Book_Card";
import React, {useEffect, useState} from "react";

import {useAuth} from "../hook/useAuth";
import HomeIcon from '@mui/icons-material/Home';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Input from "@mui/material/Input";
import {IconButton, InputAdornment} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import avatar from "../assets/Avatar - Leitor.png";
export function Painel_Control_Page(){
	
	const [countBook,setCountBook]=useState<any>(
			[
				{
					amount:20000,
					msg:"Livros Disponiveis",
					color:"green"
				},
				{
					amount:10000,
					msg:"Autores",
					color:"blue"
				},
				{
					amount:2000,
					msg:"Livros lidos",
					color:"orange"
				}
			]
	)
	const {data}=useAuth();
	

	return(
		<div className={''}>
			<div className={'fixed float-left bg-rose-100 h-screen w-[16rem] p-8'}>
				<div className={'mb-4'}>
					<p className={'text-[0.9rem]'}>Biblioteca digital</p>
				</div>
				<div className={'flex flex-col mt-[5rem] gap-5'}>
					<button className={'flex items-center'}>
						<HomeIcon/>
						<p className={'text-[1rem]'}>Inicio</p>
					</button>
					<button className={'flex items-center '}>
						<StarBorderIcon/>
						<p className={'text-[1rem]'} >Favoritos</p>
					</button>
					<button className={'flex items-center '}>
						<BookmarkAddIcon/>
						<p className={'text-[1rem]'}>Adicionar Livro</p>
					</button>
				</div>
			</div>
			<div className={'ml-[15rem] '}>
				<div>
					<nav className={' flex justify-between items-center p-10'}>
						<div className={'flex items-center gap-3'}>
							<p>Painel de controlo</p>
						</div>
						<div className={'flex justify-between items-center gap-3'}>
							<div>
								
								<Input type={'text'} placeholder={'procurar por titulo, autores'}
								       className={'outline-none bg-gray-200  px-4 py-3 rounded text-[0.8rem] '}
								       startAdornment={
									       <InputAdornment position="start">
										       <SearchTwoToneIcon />
									       </InputAdornment>
								       }
								/>
							</div>
							<div>
								<img src={avatar} className={'w-[3rem] h-[3rem] rounded-[50%]'}/>
							</div>
						</div>
					</nav>
					
				</div>
				<div className={'flex justify-around'}>
					{
						countBook.map((element:any)=>
						{
							return (
								<div className={'w-[19rem]  bg-gray-200 p-2 rounded-[1.5rem]'}>
									<p style={{color:element.color}} className={' flex justify-center text-[2.5rem] font-bold'}>{element.amount}</p>
									<p className={' flex justify-center '}>{element.msg}</p>
								</div>
							)
						})
					}
				</div>
				<p className={'m-[2.5rem]'}>Mais Populares</p>
				
				<div className={'mx-8 grid grid-cols-4 gap-3'}>
					
					{
						data.map((element:any)=>{
							return <Book_Card element={element}/>
						})
					}
				</div>
			</div>
		</div>
	)
}