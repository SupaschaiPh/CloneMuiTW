import { DialogTitle, Dialog, IconButton, DialogContent, DialogContentText, Avatar ,FormControl ,Select ,MenuItem, InputLabel, TextareaAutosize, Link, DialogActions, Tooltip, Button  } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useContext, useState } from "react";
import {ModalContext} from "../components/Leftbar"
export default function NewPostModal(){
  const {newPostModalOpen,setNewPostModalOpen} = useContext(ModalContext)
  const [postScope,setPostScope] = useState(0)
  const descPostScope = [
    <Link underline="none" className="text-sm items-center" ><PublicRoundedIcon className="text-base" /> ทุกคนสามารถตอบกลับได้</Link>,
    <Link underline="none" className="text-sm text-sky-600/60 items-center" ><LockRoundedIcon className="text-base" /> เฉพาะวงใน Twitter ที่ติดตามคุณเท่านั้นที่สามารถตอบกลับได้</Link>
  ]
  return (
    <Dialog
        open={newPostModalOpen} 
      >
        <DialogTitle>
          <IconButton onClick={()=>setNewPostModalOpen(false)} >  <CloseRoundedIcon/> </IconButton>
        </DialogTitle>
        <DialogContent  sx={{width:550}}>
          <div className="flex w-full p-2" >
            <Avatar className="mr-5" />
            <div className="w-11/12">
              <FormControl fullWidth >
                <Select
                  inputProps={{ 'aria-label': 'Without label' }}
                  size="small"
                  displayEmpty
                  className="w-1/3 font-sans"
                  value={postScope}
                  color="secondary"
                  onChange={(e)=>{setPostScope(e.target.value)}}
                >
                  <MenuItem className="font-sans" value={0}>ทุกคน</MenuItem>
                  <MenuItem className="font-sans" value={1}>วงในTwitter</MenuItem>
                </Select>
            </FormControl>
            <TextareaAutosize minRows={5} placeholder="มีอะไรเกิดขึ้นบ้าง" className="w-full mt-5 outline-none resize-none	">
            </TextareaAutosize>
            </div>
          </div>
          {descPostScope[postScope]}
        </DialogContent>
        <DialogActions className="justify-between border-t border-gray-100" >
          <div className="flex">
            <Tooltip title="สื่อ" >
              <div>
                <IconButton color="primary" size="small"> <PhotoRoundedIcon /> </IconButton>
              </div> 
            </Tooltip>
            <Tooltip title="Gif"> 
              <div>
                <IconButton color="primary" size="small"> <SquareRoundedIcon  /> </IconButton> 
              </div>
            </Tooltip>
            <Tooltip title="โพล"> 
              <div>
                <IconButton color="primary" size="small"> <BallotRoundedIcon  /> </IconButton> 
              </div>
            </Tooltip>
            <Tooltip title="อีโมจิ"> 
              <div>
                <IconButton color="primary" size="small"> <EmojiEmotionsRoundedIcon  /> </IconButton> 
              </div>
            </Tooltip>
            <Tooltip title="กำหนดเวลา"> 
              <div>
                <IconButton color="primary" size="small"> <EventRoundedIcon  /> </IconButton> 
              </div>
            </Tooltip>
            <Tooltip title="ตำแหน่ง"> 
              <div>
                <IconButton color="primary" size="small"> <LocationOnRoundedIcon  /> </IconButton> 
              </div>
            </Tooltip>
          </div>
          <Button variant="contained" color="primary" >โพส</Button>
        </DialogActions>
    </Dialog>
  )
}