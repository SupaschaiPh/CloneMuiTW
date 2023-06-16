import {
  OutlinedInput,
  FormControl,
  IconButton,
  ButtonGroup,
  Tooltip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
export default function MessageInbox() {
  return (
      <div className="w-full grid grid-cols-1 h-screen border-r border-gray-100">
        <div className="messageInBox"></div>
        <div className="p-3 w-full self-end border-t border-gray-100 ">
          <FormControl fullWidth>
            <OutlinedInput
              endAdornment={
                <IconButton>
                  <SendIcon className="text-base text-sky-500" />
                </IconButton>
              }
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
              size="small"
              placeholder="เริ่มข้อความใหม่"
              fullWidth
            />
          </FormControl>
        </div>
      </div>
  );
}
