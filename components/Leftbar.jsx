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
const pageIcons = [<HomeRoundedIcon className="text-3xl " />,<SearchRoundedIcon className="text-3xl "/>
,<NotificationsRoundedIcon className="text-3xl " />,<MailRoundedIcon className="text-3xl " />,
<ArticleRoundedIcon className="text-3xl " />, <BookmarkRoundedIcon className="text-3xl " />,
<CheckCircleRoundedIcon className="text-3xl " />, <PersonRoundedIcon className="text-3xl " />,
<MoreHorizRoundedIcon className="text-3xl " />  ]
const listt = ()=>{
  return <div className="flex flex-col gap-2 lg:gap-4 p-5">
    {pages.map(
      (page,index)=>{
        return (
          <Link key={"Rightbar"+index} href={"/"+(hrefPages[index] ? hrefPages[index] : "")} underline="none">
            <div className="hidden max-lg:block text-black w-fit p-2">
              <IconButton >
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
          <div className="ml-5 mt-0 mb-0 self-start max-lg-:self-center">
            <IconButton>
              <Avatar className="h-8 w-8" src="https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7709.jpg"/>
            </IconButton>
            </div>
            {listt()}
          <div className="w-full p-2 pr-6 pl-6">
            <div style={{width:50,height:50}} className="hidden max-lg:block flex justify-center " >
              <Button color="primary" variant="contained" sx={{borderRadius:"100%",p:2,width:50,height:50}}>         
                <CreateRoundedIcon fontSize="small" /> 
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