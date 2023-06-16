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
  return <div className="flex flex-col gap-3 lg:gap-4 p-5">
    {pages.map(
      (page,index)=>{
        return (
          <Link key={"Rightbar"+page} href={"/"+(hrefPages[index] ? hrefPages[index] : "")} underline="none">
              <IconButton className="lg:hidden text-black w-fit p-2">
                {pageIcons[index]}
              </IconButton>
              <Button startIcon={<div className="text-xl">{pageIcons[index]}</div>} className="max-lg:hidden gap-3 rounded-full text-xl font-semibold text-black pr-2 pl-2">
                <p>{page.toString()}</p>
              </Button>
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
    <header className="flex flex-col h-full border-r w-3/12 max-lg:w-fit border-gray-100 max-lg:items-end max-sm:hidden sticky top-0">
      <div className="pt-1 flex flex-col h-screen justify-between" >
        <div className="flex flex-col">
            <IconButton className="ml-5 mt-0 mb-0 self-start max-lg-:self-center">
              <Avatar className="h-8 w-8" src="https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7709.jpg"/>
            </IconButton>
            {listt()}
          <div className="w-full p-2 pr-6 pl-6">
            <IconButton color="primary" sx={{width:45,height:45}} className="p-2 rounded-full hidden max-lg:block bg-sky-500 " variant="contained">         
              <CreateRoundedIcon className="text-white m-0 p-0" /> 
            </IconButton>
            <Button onClick={()=>setNewPostModalOpen(true)} variant="contained" className="w-full bg-sky-500 rounded-full p-2.5 font-bold text-md max-lg:hidden">โพส</Button>
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