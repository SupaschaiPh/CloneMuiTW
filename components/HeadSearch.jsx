import {
  Tab,
  Tabs,
  Typography,
  TextField,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Menu
} from '@mui/material';
import { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function HeadSearch(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div className="border-b border-gray-100 w-full sticky top-0 bg-white z-50">
      <div className="flex p-3 pr-5 pl-5 items-center gap-3">
      {props.leftIcon? props.leftIcon : ""}
        <OutlinedInput
        className="font-sans"
          fullWidth
          size="small"
          placeholder="ค้นหาทวิตเตอร์"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          onFocus={(e)=>{setAnchorEl(e.target)}}
        ></OutlinedInput>
        {props.rightIcon? props.rightIcon : ""}
        
      </div>
    </div>
  );
}
