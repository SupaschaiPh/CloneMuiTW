import { Container,Drawer } from "@mui/material";
import {  ThemeProvider } from '@mui/material/styles';
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import { theme1 } from "./Theme";

export default function Layout2({children,rightbar}){
  return (
    <ThemeProvider theme={theme1}>
      <Container sx={{p:{xs:0}}}>
        <div className="flex w-full  justify-center">
          <Leftbar  />
          {children}
        </div>
       
      </Container>
    </ThemeProvider>
  )
}