import { createContext, useContext, useState } from 'react';
import Head from '../../components/Head';
import Layout from '../../components/Layout';
import Rightbar from '../../components/Rightbar';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
export default function Home() {
  const [indexTab, setIndexTab] = useState(0);
 
  return (
    <Layout rightbar={<Rightbar />}>
      <Head
        name="การแจ้งเตือน"
        tabs={['ทั้งหมด', 'ยืนยันแล้ว','การพูดถึง']}
        indexTab={indexTab}
        setIndexTab={setIndexTab}
        icon={<SettingsRoundedIcon/>}
      />
    </Layout>
  );
}
