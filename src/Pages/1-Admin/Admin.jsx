import { Stack } from '@mui/material'
import React from 'react'
import { useLocation, } from 'react-router-dom'
import Dashboard from './Dashboard'
import SlideBar from '../../components/SlideBar';
import AdmainHeader from './AdmainHeader';
import Footer from '../../components/Footer';
import Setting from './Setting';
import Tables from './Tables';
import Maps from './Maps';

function Admin() {
  const {pathname} = useLocation();
  const mainPath = pathname?.slice(7);
  return (
    <Stack direction={"row"}>
      <Stack sx={{ display: { xs: "none", md: "flex"  } }}>
        <SlideBar pos={true} />
      </Stack>
      <Stack sx={{ width: "100%", ml: { md: 31 } }}>
        <AdmainHeader />
        {mainPath === "dashboard" ? (
          <Dashboard />
        ) : mainPath === "setting" ? (
          <Setting />
        ) : mainPath === "tables" ? (
          <Tables />
        ) : mainPath === "map" ?(
          <Maps />
        ) : <Dashboard />}
        <Footer list={true} />
      </Stack>
    </Stack>
  );
}

export default Admin