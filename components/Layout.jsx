import { Container,Drawer } from "@mui/material";
import {  ThemeProvider } from '@mui/material/styles';
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import { theme1 } from "./Theme";

export default function Layout({children,rightbar}){
  return (
    <ThemeProvider theme={theme1}>
      <Container sx={{p:{xs:0}}}>
        <div className="flex w-full  justify-center">
          <Leftbar  />
          <div className="w-6/12  max-lg:w-8/12 max-sm:w-full max-lg:border-r border-gray-100">
            {children}
          </div>
          {rightbar}
        </div>
      </Container>
    </ThemeProvider>
  )
}