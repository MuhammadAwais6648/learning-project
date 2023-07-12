import React from "react";
import "./HeaderpageStyling.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import TaskIcon from '@mui/icons-material/Task';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';


function Header() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container sx={{ margin: "10px", backgroundColor: "blue" }}>
    <p>task</p>
      <Grid
        sx={{
          justifyContent: "center",
          // alignItems: "center",
          marginBlock: "10px",
          backgroundColor: "#071952",
          
        }}
      >
        <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  item xs={6} >
            <Item className="content-wraper">
            <p><ContentPasteIcon/> <span>To-do</span></p>
            <Box sx={{ flexGrow: 1 }}>
                    <Grid  item xs={12} sm={12} md={12} sx={{}}>
                      <Item spacing={0} sx={{margin:"10px"}}>
                        <h4 >wire up the new user</h4>
                        {/* <Button variant="contained">Wen</Button> */}
                        <button className="button-wraper">Wen</button>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        
                      </Item>
                      <Item spacing={0} sx={{margin:"10px"}}>
                        <h4 >wire up the new user</h4>
                        {/* <Button variant="contained">Wen</Button> */}
                        <button className="button-wraper">Wen</button>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        
                      </Item> 
                </Grid>
                </Box>
                </Item>
          </Grid>




          <Grid  item xs={6} >
            <Item className="content-wraper">
            <p><TaskIcon/><span>Done</span></p>
            <Box sx={{ flexGrow: 1 }}>
                    <Grid item xs={12} sm={12} md={12} sx={{}}>
                    <Item spacing={0} sx={{margin:"10px"}}>
                        <h4 >wire up the new user</h4>
                        {/* <Button variant="contained">Wen</Button> */}
                        <button className="button-wraper">Wen</button>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <p className="p-wraper">todo</p>
                      </Item>
                    <Item spacing={0} sx={{margin:"10px"}}>
                        <h4 >wire up the new user</h4>
                        {/* <Button variant="contained">Wen</Button> */}
                        <button className="button-wraper">Wen</button>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <p className="p-wraper">todo</p>
                      </Item>
                    <Item spacing={0} sx={{margin:"10px"}}>
                        <h4 >wire up the new user</h4>
                        {/* <Button variant="contained">Wen</Button> */}
                        <button className="button-wraper">Wen</button>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <p className="p-wraper">todo</p>
                      </Item>
                    <Item spacing={0} sx={{margin:"10px"}}>
                        <h4 >wire up the new user</h4>
                        {/* <Button variant="contained">Wen</Button> */}
                        <button className="button-wraper">Wen</button>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <p className="p-wraper">todo</p>
                      </Item>
                    <Item spacing={0} sx={{margin:"10px"}}>
                        <h4 >wire up the new user</h4>
                        {/* <Button variant="contained">Wen</Button> */}
                        <button className="button-wraper">Wen</button>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <EditAttributesIcon className="icon-wraper" ></EditAttributesIcon>
                        <p className="p-wraper">todo</p>
                      </Item>
                    
                </Grid>
                </Box>
                </Item>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
