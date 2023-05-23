import React, { useEffect, useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box,  Button, Grid } from '@mui/material';
import iconlist from "../images/icon-todo.svg"
import calendar from "../images/icon-calendar.svg"
import reminder from "../images/icon-reminders.svg"
import planning from "../images/icon-planning.svg"
import { nav, navinterface, objectnav } from '@/data/navdata';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
interface Menucomponentprops{
    page:string
}
function Menucomponent({page}:Menucomponentprops) {
  // console.log(src)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    let [dataresult,setdata]=useState([]as string[])
    let [notexist,setnotexist]=useState(false)
    useEffect(()=>{
        if(nav.filter((ele) => ele.name === page).length>0){
           console.log(nav.filter((ele) => ele.name === page).length>0)
            let {data}=nav.filter((ele) => ele.name === page)[0]
        setdata(data)
        }else{
            console.log(page)
            console.log(nav.filter((ele) => ele.name === page).length>0)

            // setnotexist(!notexist)
            setdata([])
        }
        setnotexist(!notexist)
        
    },[page])
  return (
    <>
       <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >

        {page}
        <IoIosArrowDown/>        

      </Button>
    <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >

      {dataresult?.map((element:string,index:number)=>{

    return(
      <Box  sx={{display:"flex",alignItems:"center"}} key={index}>
        {/* <Grid item lg={6} md={6} sm={6}> */}
      {element==="Todo List"?<Image src={iconlist} alt=''width={20} height={20}/>:element==="Calendar"?<Image src={calendar} alt=''width={20} height={20}/>:element==="Reminders"?<Image src={reminder} alt=''width={20} height={20}/>:element==="planning"?<Image src={planning} alt=''width={20} height={20}/>:""}
      {/* </Grid> */}
      {/* <Grid item lg={6} md={6} sm={6}> */}
    <MenuItem onClick={handleClose} key={index} style={{margin:"0px"}}>{element}</MenuItem></Box>
  )
        })}

   
        
  </Menu>
   </>
  )
}

export default Menucomponent