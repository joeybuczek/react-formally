import { createContext } from "react";

const FormContext = createContext();
export const { Provider, Consumer: FormData } = FormContext;
