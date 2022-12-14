import React from "react";
import {Link} from "react-router-dom";


export function Book_Card({element}:any){
	const URL="https://docs.google.com/uc?id=";
	return(
		<div className={'grid rid-rows-2 '}>
			<div className={'flex justify-center h-[20rem] w-[15rem]  border-2 rounded-xl'}>
				<Link to={`/book/${element.id}`}>
					<img src={`${element.img}`} className={' h-[20rem] w-[15rem] rounded-xl'}/>
				</Link>
				
			</div>
			<div className={'mt-5 mb-10'}>
				<p className={'text-[0.8rem]'}>
					<Link to={`/book/${element.id}}`}>{element.title}</Link>
				</p>
				<p className={'text-[0.8rem]'} >
					<Link to={`/book/${element.id}}`} >{element.author}</Link>
				</p>
				
				
			</div>
		</div>
	)
}