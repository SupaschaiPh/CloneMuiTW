import { Avatar, IconButton, Typography, Button, ButtonBase } from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export default function Profile(){
  return (
    <div className="flex w-full p-2 pb-8  justify-center">
      <a className="flex lg:w-11/12  items-center justify-between rounded-full text-black hover:bg-gray-50 p-3">
        <div className="flex items-center max-lg:hidden">
          <Avatar className="mr-3" />
          <div >
            <Typography>Bozzz</Typography>
            <div className="text-gray-500" >@Bozzz</div>
          </div>
        </div>
        <div className="text-xl max-lg:hidden">
          <MoreHorizRoundedIcon/>
        </div>
        <div className="lg:hidden">
        <Avatar />
        </div>
      </a>
      
    </div>
  )
}