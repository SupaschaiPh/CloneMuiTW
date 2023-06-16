import { createContext, useContext, useState } from 'react';
import Head from '../../components/Head';
import Layout from '../../components/Layout';
import Rightbar from '../../components/Rightbar';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Typography } from '@mui/material';
export default function Home() {
 
  return (
    <Layout rightbar={<Rightbar />}>
      <Typography variant="h6" className="p-3 font-bold">บุ๊คมาร์ก</Typography>
      <div className="w-full flex flex-col items-center mt-10">
        <img className="h-48" src="https://media.discordapp.net/attachments/1118014561778405488/1119197994013696011/book-in-bird-cage-800x400.png" />
        <div className="w-2/3 flex flex-col items-start">
          <Typography variant="h4" className="font-semibold mt-8">
            บันทึกทวีตไว้ดูภายหลัง
          </Typography>
          <Typography className="mt-2  text-gray-500">
          อย่าปล่อยให้ทวีตดีๆ บินหนีหายไป บุ๊คมาร์กทวีตเพื่อให้ค้นหาอีกครั้งได้ง่ายๆ ในอนาคต
          </Typography>
        </div>
      </div>
    </Layout>
  );
}
