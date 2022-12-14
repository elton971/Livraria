import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useAuth} from "../hook/useAuth";

export function Description_Page(){
	const { id} = useParams()
	const {data}=useAuth()
	const [element,setElement]=useState<any>([])
	
	useEffect(()=>{
		data.map((element:any)=>{
			if(element.id==id)
			{
				setElement(element)
				
			}
		});
	},[])
	return(
		<div className={' h-screen flex justify-center '}>
			<div className={'grid grid-cols-2 bg-white h-[30rem] w-[50rem] my-[5%]'}>
				<div>
				    <img src={`../../../public/${element.img}`} alt={element.img} className={'w-[20rem]'}/>
				</div>
				<div className={'mt-4'}>
					<p className={'text-[2rem]'}>{element.title}</p>
					<p>Autor{element.author}</p>
					<div>
						<Link className={'bg-blue-500 w-[15rem] text-white p-2 rounded flex justify-center  '} to={''}>Ler o livro</Link>
					</div>
				</div>
				
			</div>
		</div>
	)
}