import { createContext } from "react";
import { Bonjour } from "./components/molecules";
import { ThemeProvider } from "styled-components";

const nightModeContext = createContext(false);

const NightModeProvider = ({ value, children }) => {
  return <Bonjour />;
};

export { nightModeContext, NightModeProvider };
