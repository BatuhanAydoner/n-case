import { useContext } from "react";
import { CaseContext } from "../context/SlipBasket";

export const useAppContext = () => useContext(CaseContext);

export default useAppContext;
