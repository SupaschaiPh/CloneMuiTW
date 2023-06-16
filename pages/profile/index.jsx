import Layout from '../../components/Layout';
import Rightbar from '../../components/Rightbar';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Avatar, Button, ButtonGroup, IconButton, Tab, Tabs } from '@mui/material';
import Head from '../../components/Head';
import { useState } from 'react';
export default function Profile() {
  const [indexTab, setIndexTab] = useState(0);
  return (
    <Layout rightbar={<Rightbar />}>
      <Head name="Profile" leftIcon={<ArrowBackRoundedIcon/>} />
      <div id="profileDetail" className="border-b border-gray-100">
        <div id="profileCover" className="relative ">
          <div style={{backgroundImage:"url('https://media.discordapp.net/attachments/1115309410756067428/1117858185643053206/noddle2.jpg')"}} className="h-52">
          </div>
          <div className="flex justify-between p-5 pt-3 pb-3">
            <Avatar  sx={{position:"absolute",height:100,width:100,bottom:0,left:25}} />
            <div style={{width:130,padding:5}}></div>
            <Button color="secondary" variant="outlined" >แก้ไข้ข้อมูล</Button>
          </div>
        </div>
        <div className="p-3 pr-5 pl-5">
          <h6 className="text-xl font-semibold" >DisplayName</h6>
          <div className="text-gray-500">@useName</div>
        </div>

        <Tabs variant="fullWidth" value={indexTab} onChange={(e,child)=>{setIndexTab(child)}} >
          <Tab value={0} label="โพส" />
          <Tab value={1} label="การตอบกลับ" />
          <Tab value={2} label="สื่อ" />
          <Tab value={3} label="ความชอบ" />

        </Tabs>
      </div>
    </Layout>
  );
}
