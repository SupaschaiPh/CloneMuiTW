import Layout2 from '../../components/Layout2';
import Rightbar from '../../components/Rightbar';
import {
  Typography,
  TextField,
  OutlinedInput,
  FormControl,
  IconButton,
  ButtonGroup,
  Tooltip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import MessageInbox from '../../components/MessageInbox';
export default function Message() {
  return (
    <Layout2 rightbar={<Rightbar />}>
      <div className="w-4/12 border-r border-gray-100 p-3">
        <Typography variant="h6" className="font-semibold">
          ข้อความ
        </Typography>
      </div>
      <div className="w-5/12 grid grid-cols-1 h-screen border-r border-gray-100">
        <MessageInbox/>
      </div>
    </Layout2>
  );
}
