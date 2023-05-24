import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AppBar, Avatar, Box, Button, Collapse, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import React from 'react'
import Nav from '@/components/Nav'
import{IoIosArrowDown}from "react-icons/io"
import Menucomponent from '@/components/Menu'
import Link from 'next/link'
import Body from './body'
import logo from '../images/logo.svg'
// import HomeMain from './home'
// import  '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize();
    
    window.addEventListener('resize', handleResize);
    console.log(screenWidth)
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);
  
  const pages = ['Features', 'Company'];
  const pages2 = ['Careers', 'About'];
  
  
  
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    
    const [state, setState] = React.useState({

      right: false,
    });
type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
  
        setState({ ...state, [anchor]: open });
      };
 

  return (

    <>
     <div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
                       <Image src={logo} alt=''/>

          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image src={logo} alt=''/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none',sm:"flex", md: 'flex',lg:"flex" } ,alignItems:"center",justifyContent:"space-between"}}>
            <div>
            {pages.map((page,index) => 
           { return(
              <Menucomponent page={page} key={index}/>
            )})}
            {pages2.map((page,index) => {return(
              
           <Link href="/" className='MuiButtonBase-root'style={{display:"inline-flex",padding:"6px 8px",color:"black"}} key={index}>{page}</Link>
             
              
            )})}</div>
            <div>
            <div className='css-1t6c9ts'>
          <Grid container justifyContent={"flex-end"} >
          <Grid item >
          <div className='loginstylelink'onClick={(e)=>{(e.target as HTMLDivElement).classList.toggle("active")}}>
          <Link href="/">Login</Link></div></Grid>
          <Grid item >
          
          <div className='loginstylelink'onClick={(e)=>{(e.target as HTMLDivElement).classList.toggle("active")}}>
          <Link href="/">Register</Link></div></Grid></Grid></div>
            </div>
          </Box>
      
          
        {screenWidth<600?<Box sx={{ flexGrow: 0 }}>
            
            <Button onClick={toggleDrawer("right", true)}>
            <AiOutlineMenu className={styles.stylemenuicon}/>
          </Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <List>
            {pages.map((page,index) => {
            return <Nav page={page} key={index}/>
            })}
             {pages2.map((page,index) => {
            return <Nav page={page} key={index}/>
            })}
      </List>
            {/* {list("right")} */}
          </Drawer>
          </Box>:""}
          
        </Toolbar>
      </Container>
    </AppBar>
      {/* <Home/> */}
    </div>
    <Body/>
    </>
  )
}


