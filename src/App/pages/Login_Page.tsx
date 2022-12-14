import auth_Image from "../assets/Imagem - Autenticação.jpg"
import google_Icon from "../assets/google.png"
import Facebook_Icon from "../assets/facebook.png"
import {useState} from "react";
import { getAuth, signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {app} from "../services/FireBase";


export function Login_Page(){
	const [email,setEmail]=useState<string>('');
	const [password,setPassword]=useState<string>('');
	const [auth_Control,setAuth_Control]=useState<boolean>(false);
	const router=useNavigate();
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const facebookProvider=new FacebookAuthProvider();
	async function  login()
	{
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user
				console.log(user)
				if(user.email==="admin@gmail.com")
				{
					router("/Painel")
				}
				else{
					router("/home")
				}
				return user
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}
	
	async function  loginGoogle(){
		await signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// The signed-in user info.
				const user = result.user;
				//const accessToken = credential.accessToken;
				router("/home")
				// ...
			}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
	}
	
	async function loginFacebook(){
		await signInWithPopup(auth, facebookProvider)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				const credential = FacebookAuthProvider.credentialFromResult(result);
				//const accessToken = credential.accessToken;
				console.log(user)
				router("/home")
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = FacebookAuthProvider.credentialFromError(error);
				
				// ...
			});
	}
	
	return(
		<div className={'grid grid-cols-2 '}>
			<div >
				<img src={auth_Image} alt={"imagem de Autenticação"} className={'h-[50.5rem] w-screen '}/>
				<div className={'flex justify-center items-center'}>
					<div className={'absolute -bottom-12 '}>
						<p className={'text-[4rem] text-gray-800'}>Biblioteca Virtual</p>
						<p className={'flex justify-center text-[1.5rem] text-white '}>Encontre aqui o livro que precisas</p>
					</div>
				</div>
				
			</div>
			<div className={'pt-20 px-28'}>
				<div >
					<div className={'flex justify-center mb-10'}>
						<p className={'text-[2rem]'}>Seja bem-vindo</p>
					</div>
					
					<div>
						<div className={'login_Input'}>
							<label>E-mail</label>
							<input type={'email'} placeholder={'Introduza o seu e-mail'}
							       className={'input_Config'}
							       onChange={(e:any)=>{
								       setEmail(e.target.value)
							       }}
							/>
						</div>
						<div className={'login_Input'}>
							<label>Palavra-passe</label>
							<input type={'password'} placeholder={'Introduza a sua palavra passe'}
									className={'input_Config'}
                                   onChange={(e:any)=>{
	                                   setPassword(e.target.value)
                                   }}
							/>
						</div>
						<div className={'flex justify-between'}>
							<div>
								<input type={'checkbox'} id={'checkbox'} placeholder={'Introduza o seu e-mail'} className={'mx-2 cursor-pointer'}/>
								<label className={'text-gray-500 cursor-pointer'} htmlFor={'checkbox'}>Manter-me auteticado</label>
							</div>
							<div>
								<a href={''} className={'text-blue-600'}>Recuperar a palavra-passe</a>
							</div>
						</div>
						<div className={'flex justify-center mt-10 '}>
							<button  onClick={()=>{login()}} className={'bg-blue-600 text-white w-full h-[3rem] rounded hover:bg-blue-800 duration-300'}>Entrar</button>
						</div>
						<p  className={'flex justify-center m-5 text-gray-500  s'}>Ou</p>
						<div>
								<button  onClick={()=>{loginGoogle()}} className={'button-auth'}>
									<img src={google_Icon} alt={"imagem de Autenticação"} className={'w-6 h-6'}/>
									<p >Autenticar-se com a conta Google</p>
								</button>
							
								<button  onClick={()=>{loginFacebook()}} className={'button-auth'}>
									<img src={Facebook_Icon} alt={"imagem de Autenticação"} className={'w-6 h-6'}/>
									<p>Autenticar-se com a conta do Facebook</p>
								</button>
						</div>
						<div className={'flex justify-center'}>
							<p>Não possui uma conta? <a href={''} className={'text-blue-700'}>Criar nova</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}