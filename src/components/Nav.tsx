import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import iconlist from "../images/icon-todo.svg"
import calendar from "../images/icon-calendar.svg"
import reminder from "../images/icon-reminders.svg"
import planning from "../images/icon-planning.svg"
import {AiOutlineMenu} from "react-icons/ai"
import styles from "@/styles/Home.module.css"
import { IoIosArrowDown } from 'react-icons/io';
import { Collapse } from '@mui/material';
import { nav } from '@/data/navdata';
import Link from 'next/link';
import Image from 'next/image';
interface Menucomponentprops{
  page:string
}

export default function Nav({page}:Menucomponentprops) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  let [dataresult,setdata]=React.useState([]as string[])

  React.useEffect(()=>{
    if(nav.filter((ele) => ele.name === page).length>0){
       console.log(nav.filter((ele) => ele.name === page).length>0)
        let {data}=nav.filter((ele) => ele.name === page)[0]
    setdata(data)
    }else{
        console.log(page)
        console.log(nav.filter((ele) => ele.name === page).length>0,"length")

        // setnotexist(!notexist)
        setdata([])
    }
    // setnotexist(!notexist)
    
},[page])
  return (<>
  {nav.filter((ele) => ele.name === page).length>0?<><ListItemButton onClick={handleClick}>
        <ListItemText primary={page} />
        <ListItemIcon>
          <IoIosArrowDown/>        
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {nav.filter((ele) => ele.name === page)[0].data.map((elem,index)=>{
          return <ListItemButton sx={{ pl: 4 }} key={index}>
          <ListItemIcon>
          {elem==="Todo List"?<Image src={iconlist} alt=''width={20} height={20}/>:elem==="Calendar"?<Image src={calendar} alt=''width={20} height={20}/>:elem==="Reminders"?<Image src={reminder} alt=''width={20} height={20}/>:elem==="planning"?<Image src={planning} alt=''width={20} height={20}/>:""}
            {/* <StarBorder /> */}
          </ListItemIcon>
          <ListItemText primary={elem} />
        </ListItemButton>
        })}
        
       
      </List>
    </Collapse>
    </>
      :
           <Link href="/" className='MuiButtonBase-root'style={{display:"flex",padding:"6px 16px"}}>{page}</Link>
          }
    
      </>
  );
}