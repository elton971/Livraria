import React, {useEffect, useState} from "react";
import avatar from "../assets/Avatar - Leitor.png";
import {Book_Card} from "./Book_Card";
import {useAuth} from "../hook/useAuth";
import {IconButton, InputAdornment} from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TurnedInTwoToneIcon from '@mui/icons-material/TurnedInTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import Input from '@mui/material/Input';


const style = {
	position: 'absolute' ,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 900,
	height:500,
	background:'white',
	border: 'none',
	boxShadow: 24,
	p: 4,
};

export default function Nav_Bar() {
	
	const [open, setOpen] = useState(false);
	const [allView, setAllView] = useState(true);
	const [recentSearch, setRecentSearch] = useState(false);
	const [all, setAll] = useState<any>('');
	const [recent, setRecent] = useState<any>('');
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const {data}=useAuth();
	
	useEffect(()=>{
		if(allView)
		{
			setAll('rgb(229 231 235)')
			setRecent('white')
		}
		else{
			setAll('white')
			setRecent('rgb(229 231 235)')
		}
	},[allView]);
	
	
	return (
		<div>
			<nav className={' flex justify-between items-center p-10'}>
				<div className={'flex items-center gap-3'}>
					<button
				         onClick={()=>{
					         setAllView(true)
					         setRecentSearch(false)
						    }
						 }
				         style={{backgroundColor:all}}
				         className={'rounded-3xl p-2 text-[0.8rem]'}
					>
						Todos
					</button>
					<button
					        onClick={()=>{
								setAllView(false)
						        setRecentSearch(true)
								}
							}
					        style={{backgroundColor:recent}}
					        className={'rounded-3xl p-2 text-[0.8rem]'}
					>
						Pesquisados Recentemente
					</button>
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
						<IconButton aria-label="delete" onClick={handleOpen} size={'large'}>
							<TurnedInTwoToneIcon />
						</IconButton>
						
					</div>
					<div>
						<img src={avatar} className={'w-[3rem] h-[3rem] rounded-[50%]'}/>
					</div>
				</div>
			</nav>
			
			<Modal
				open={open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				
			>
				<Box sx={style}>
					<div>
						<p>Favorites</p>
						<p>Total:3</p>
					</div>
					<div className={'grid grid-cols-3  '}>
						<button className={'absolute right-6 top-2 '} onClick={handleClose}><p className={'text-[1.5rem]'}>X</p></button>
						{
							data.map((element:any,index:number)=>{
								if(index>4)
								{
									return <Book_Card element={element}/>
								}
								
							})
						}
					</div>
				</Box>
				
			</Modal>
		</div>
	);
}