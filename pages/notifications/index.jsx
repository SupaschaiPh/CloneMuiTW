import { createContext, useContext, useState } from 'react';
import Head from '../../components/Head';
import Layout from '../../components/Layout';
import Rightbar from '../../components/Rightbar';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Typography,Fade,Zoom } from '@mui/material';
export default function Home() {
  const [indexTab, setIndexTab] = useState(0);

  const setContent =()=>{
    if(indexTab==1){
      return (
        <Zoom in={true}>
          <div className="w-full flex flex-col items-center p-5 text-3xl">
            <div>
              <Typography variant="h5" >ยังไม่มีอะไรให้ดูที่นี่</Typography>
              <Typography >เมื่อมีคนพูดถึงคุณ คุณจะพบได้ที่นี่</Typography>
            </div>
          </div>
        </Zoom>
      )
    }
    else {
      return (
        <Fade in={true}>
          <div className="w-full flex flex-col items-center p-5 text-3xl">
            <div>
              <Typography variant="h5" >ยังไม่มีอะไรให้ดูที่นี่</Typography>
              <Typography >เมื่อมีคนพูดถึงคุณ คุณจะพบได้ที่นี่</Typography>
            </div>
          </div>
        </Fade>
      );
    }
  }

  return (
    <Layout rightbar={<Rightbar />}>
      <Head
        name="การแจ้งเตือน"
        tabs={['ทั้งหมด', 'ยืนยันแล้ว','การพูดถึง']}
        indexTab={indexTab}
        setIndexTab={setIndexTab}
        icon={<SettingsRoundedIcon/>}
      />
      {setContent()}
    </Layout>
  );
}
