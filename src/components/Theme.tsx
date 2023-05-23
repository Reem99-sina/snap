
import { createTheme } from '@mui/material/styles';
export interface themeinterface{
  palette:{
    primary:{
      light:string,
      main:string,
      dark:string,
      contrastText:string
    }
  }
}
const theme = createTheme({
  palette: {
    primary: {
      light: '#616161',
      main: '#3f50b5',
      dark: '#000',
      contrastText: '#fff',
    },
   
  },
});
export default theme