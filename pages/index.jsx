import { createContext, useContext, useEffect, useState } from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Post from '../components/Post';
import styles from '../styles/Home.module.css';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import { Typography } from '@mui/material';
import Rightbar from '../components/Rightbar';
/*
ติด Cors
export async function getServerSideProps() {
  const res = await fetch("https://stackblitzstarterstoqckw-zysb--3000--77657b1e.local-credentialless.webcontainer.io/api/posts",{
    headers:{

    }
  })
  const postsList = await res.json()
  return { props: { postsList } }
}
*/
function Home({ postsList }) {
  const [indexTab, setIndexTab] = useState(0);
  const sample = () => {
    if (indexTab == 0) {
      return (
        <div>
          <Post
            avatar="https://media.discordapp.net/attachments/1118014561778405488/1118015620009693266/5bf2a026-fe65-4653-bd15-27cf7f5cd2d6.png"
            displayName="catOnTheCone"
            userName="@catOnTheConeOffice"
            postTime="1วินาที"
            content="hello world!?"
          />
          <Post
            avatar="https://media.discordapp.net/attachments/1118014561778405488/1119183347340562442/QCn0ZYNCnqdBRbIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSyTfyPwtfLBesc27wAAAAAElFTkSuQmCC.png"
            displayName="Thairath_News"
            userName="@Thairath_News"
            content="หยิบลอตเตอรี่ แล้วมาลุ้นรางวัลใหญ่ ไปพร้อมๆ กันที่นี่"
            img="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5K33rXKIhtsY41tEGYHgzKWyAhjywPyJGFMNY3XMN6xaOoh8NCh.webp"
          />
          <Post
            avatar="https://media.discordapp.net/attachments/1118014561778405488/1119183347340562442/QCn0ZYNCnqdBRbIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSyTfyPwtfLBesc27wAAAAAElFTkSuQmCC.png"
            displayName="Thairath_News"
            userName="@Thairath_News"
            content="หยิบลอตเตอรี่ แล้วมาลุ้นรางวัลใหญ่ ไปพร้อมๆ กันที่นี่"
            img="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5K33rXKIhtsY41tEGYHgzKWyAhjywPyJGFMNY3XMN6xaOoh8NCh.webp"
          />
          <Post
            avatar="https://media.discordapp.net/attachments/1118014561778405488/1119183347340562442/QCn0ZYNCnqdBRbIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSyTfyPwtfLBesc27wAAAAAElFTkSuQmCC.png"
            displayName="Thairath_News"
            userName="@Thairath_News"
            content="หยิบลอตเตอรี่ แล้วมาลุ้นรางวัลใหญ่ ไปพร้อมๆ กันที่นี่"
            img="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5K33rXKIhtsY41tEGYHgzKWyAhjywPyJGFMNY3XMN6xaOoh8NCh.webp"
          />
        </div>
      );
    } else {
      return (
        <div className="w-full flex flex-col items-center p-5 text-3xl">
          <div>
            <Typography variant="h5" className="font-sans font-bold">
              ยังไม่มีอะไรให้ดูที่นี่
            </Typography>
            <Typography className="font-sans font-bold text-gray-500">
              เมื่อมีคนพูดถึงคุณ คุณจะพบได้ที่นี่
            </Typography>
          </div>
        </div>
      );
    }
  };
  return (
    <Layout rightbar={<Rightbar />}>
      <Head
        name="หน้าแรก"
        tabs={['สำหรับคุณ', 'กำลังติดตาม']}
        indexTab={indexTab}
        setIndexTab={setIndexTab}
      />
      {sample()}
    </Layout>
  );
}



export default Home;