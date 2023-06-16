import {
  OutlinedInput,
  FormControl,
  IconButton,
  ButtonGroup,
  Tooltip,
  Chip,
  Zoom
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import { useState } from 'react';
export default function MessageInbox() {
  const [messageList,setMessageList] = useState(["Hello","world"])
  const [message,setMessage] = useState("")
  const sendMessage = ()=>{
    if(message!=""){
      setMessageList([...messageList,message])
      setMessage("")
    }
  }

  return (
      <div className="w-full grid grid-cols-1 h-screen border-r border-gray-100">
        <div className="messageInBox flex flex-col gap-2 p-3 items-end">
          { messageList.map((val,index)=><Zoom key={"message"+index} in={true}><Chip sx={{width:"fit-content"}} label={val} /></Zoom>)}
        </div>
        <div className="p-3 w-full self-end border-t border-gray-100 ">
          <FormControl fullWidth>
            <OutlinedInput
            onKeyDown={(e)=>{if(e.key === "Enter"){sendMessage()}}}
              startAdornment={
                <ButtonGroup>
                  <Tooltip title="สื่อ">
                    <div>
                      <IconButton color="primary" size="small">
                        {' '}
                        <PhotoRoundedIcon />{' '}
                      </IconButton>
                    </div>
                  </Tooltip>
                  <Tooltip title="Gif">
                    <div>
                      <IconButton color="primary" size="small">
                        {' '}
                        <SquareRoundedIcon />{' '}
                      </IconButton>
                    </div>
                  </Tooltip>
                  <Tooltip title="อีโมจิ">
                    <div>
                      <IconButton color="primary" size="small">
                        {' '}
                        <EmojiEmotionsRoundedIcon />{' '}
                      </IconButton>
                    </div>
                  </Tooltip>
                </ButtonGroup>
              }
              endAdornment={
                <IconButton onClick={sendMessage}>
                  <SendIcon className="text-base text-sky-500" />
                </IconButton>
              }
              size="small"
              placeholder="เริ่มข้อความใหม่"
              fullWidth
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}}
            />
          </FormControl>
        </div>
      </div>
  );
}
