import { useContext } from "react";
import { ApiContext} from "../context/Context";

export function useAuth() {
	const value = useContext(ApiContext)
	
	return value
}