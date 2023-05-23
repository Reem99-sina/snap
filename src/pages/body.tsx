import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import image1 from '../images/image-hero-desktop.png'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'
import databiz from '../images/client-databiz.svg'
import audio from '../images/client-audiophile.svg'

import Image from 'next/image'
import { useTheme } from '@emotion/react'
import theme, { themeinterface } from '@/components/Theme'
function Body() {
    const theme=useTheme() as themeinterface
    console.log(theme)
  return (
    <div className='body'>
        <Grid container spacing={2} alignItems={"center"}>
        
            <Grid item lg={6} md={6} sm={6} className='col1'>
                <h1 className='h1style'>
                    Make Remote Work
                </h1>
                <p style={{color:`${theme.palette.primary.light}`}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum non expedita voluptates pariatur dolorem blanditiis magni molestias, fugiat atque eaque laudantium voluptatibus asperiores earum ea inventore corporis fuga iure obcaecati.</p>
                <Button variant="contained"style={{backgroundColor:`${theme.palette.primary.dark}`}}>Learn More</Button>
                <Grid container spacing={2} >
                    <Grid item sm={3} >
                    <Image src={meet}alt='' style={{width:"100%"}}/></Grid>
                    <Grid item sm={3}>

                    <Image src={maker}alt=''style={{width:"100%"}}/></Grid>
                    <Grid item sm={3}>

                    <Image src={databiz}alt=''style={{width:"100%"}}/></Grid>
                    <Grid item sm={3}>

                    <Image src={audio}alt=''style={{width:"100%"}}/></Grid>

                </Grid>
            </Grid>
            <Grid item lg={6} md={6}sm={6} className='col2'>
                <div className='image'>
                    <Image src={image1} alt=''  style={{position:"relative",objectFit:"cover"  ,  width: "100%",
    height: '100%'}}/>
                </div>
            </Grid>

        </Grid>
    </div>
  )
}

export default Body