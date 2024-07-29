import { Stack } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { useLocation } from 'react-router-dom'
import LoginAndRegister from "./LoginAndRegister";
import Footer from '../../components/Footer';

function Auth() {
  const {pathname} = useLocation();
  const mainPath = pathname.slice(6);
  console.log(mainPath);
  return (
    <Stack sx={{ bgcolor: "#1E293B" }}>
      <Header bgcolor={"#1E293B"} />
      <Stack sx={{ mt: 9.5 }}>
        {mainPath === "register" ? <LoginAndRegister pageName={"register"}/> : mainPath === "login" ? <LoginAndRegister pageName={"login"}/> : <LoginAndRegister type={"login"}/> }
      </Stack>
      <Footer list={true} listColor={"#FFF"} />
    </Stack>
  );
}

export default Auth