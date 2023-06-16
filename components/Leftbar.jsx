import { Avatar, Button, Container,Drawer, IconButton, Link, List, ListItem } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import Profile from "./Profile";
import NewPostModal from "./NewPostModal";
import { createContext, useState } from "react";
const pages = ["หน้าแรก","สำรวจ","การแจ้งแตือน","ข้อความ","รายชื่อ","บุ๊คมาร์ก","ยืนยันแล้ว","ข้อมูลส่วนตัว","เพิ่มเติม"]
const hrefPages = ["","explore","notifications","messages","lists","bookmarks"]
const pageIcons = [<HomeRoundedIcon color="secondary" fontSize="large" />,<SearchRoundedIcon color="secondary" fontSize="large"/>
,<NotificationsRoundedIcon color="secondary" fontSize="large" />,<MailRoundedIcon color="secondary" fontSize="large" />,
<ArticleRoundedIcon color="secondary" fontSize="large" />, <BookmarkRoundedIcon color="secondary" fontSize="large" />,
<CheckCircleRoundedIcon color="secondary" fontSize="large" />, <PersonRoundedIcon color="secondary" fontSize="large" />,
<MoreHorizRoundedIcon color="secondary" fontSize="large"/>  ]
const listt = ()=>{
  return <div className="flex flex-col gap-2 lg:gap-4 p-5">
    {pages.map(
      (page,index)=>{
        return (
          <Link sx={{justifyContent:{sm:"center"}}} key={"Rightbar"+index} href={"/"+(hrefPages[index] ? hrefPages[index] : "")} underline="none">
            <div className="hidden max-lg:flex text-black w-full justify-center p-0 lg:p-2">
              <IconButton>
                {pageIcons[index]}
              </IconButton>
            </div>
            <div className="max-lg:hidden gap-3 rounded-full text-xl font-semibold text-black pr-2 pl-2">
                <Button color="secondary" startIcon={<div className="text-xl">{pageIcons[index]}</div>} >
                  {page}
                </Button>
            </div>
          </Link>
        )
      }
    )}
  </div>
}
export const ModalContext = createContext({})
export default function Leftbar(){
  const [newPostModalOpen,setNewPostModalOpen] = useState(false)
  const modetStore = {
    newPostModalOpen:newPostModalOpen,
    setNewPostModalOpen: (val)=>{setNewPostModalOpen(val)}
  }
  return (
    <header className="flex flex-col h-screen border-r w-3/12 max-lg:w-fit border-gray-100 max-lg:items-end max-sm:hidden sticky top-0 overflow-hidden">
      <div className="pt-1 flex flex-col h-screen justify-between" >
        <div className="flex flex-col">
          <div className="flex w-full justify-center lg:justify-start lg:ml-6">
            <IconButton>
              <Avatar className="h-8 w-8" src="https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7709.jpg"/>
            </IconButton>
            </div>
            {listt()}
          <div className="w-full p-2 pr-6 pl-6">
            <div  className="hidden max-lg:flex  justify-center" >
              <Button color="primary" variant="contained" sx={{boxSizing:"border-box",borderRadius:"100%",p:4,width:30,height:30,bgcolor:"rgb(14 165 233)",transform:"scale(0.75)"}}>         
                <CreateRoundedIcon   /> 
              </Button>
            </div>
            <div className="w-full rounded-full p-2.5 font-bold text-md max-lg:hidden" >
              <Button fullWidth onClick={()=>setNewPostModalOpen(true)} variant="contained" >โพส</Button>
            </div>
          </div>
        </div>
        <div className="justify-self-end	w-full">
          <Profile/>
        </div>
      </div>
      <ModalContext.Provider value={modetStore}>
        <NewPostModal/>
      </ModalContext.Provider>
    </header>
  )
}