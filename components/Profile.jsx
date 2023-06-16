import { Avatar, IconButton, Typography, Button, ButtonBase } from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export default function Profile(){
  return (
    <div className="flex w-full p-2 pb-8  max-lg:justify-center">
      <a className="flex lg:w-full  items-center justify-between rounded-full text-black hover:bg-gray-50 p-2">
        <div className="flex items-center max-lg:hidden">
          <Avatar className="mr-3" />
          <div >
            <Typography className="font-semibold font-sans" >MuiTwitterClone</Typography>
            <Typography className="font-light font-sans text-gray-500" >@MuiTwitterClone</Typography>
          </div>
        </div>
        <MoreHorizRoundedIcon className="text-xl max-lg:hidden" />
        <Avatar className="lg:hidden" />
      </a>
      
    </div>
  )
}