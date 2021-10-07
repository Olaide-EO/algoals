import axios from "axios";
import { HANDLE_DRAWER_TOGGLE } from "../types";

export const handleDrawerToggle = () => (dispatch) => {
	dispatch({ type: HANDLE_DRAWER_TOGGLE });
};
