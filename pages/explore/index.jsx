
import { createContext, useContext, useState } from 'react';
import HeadSearch from '../../components/HeadSearch';
import Layout from '../../components/Layout';
import Rightbar2 from '../../components/Rightbar2';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function Explore() {
    
  return (
    <Layout rightbar={<Rightbar2/>}>
      <HeadSearch rightIcon={<SettingsRoundedIcon/>} />
    </Layout>
  );
}
