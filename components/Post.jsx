import {
  Avatar,
  Box,
  IconButton,
  Typography,
  Tooltip,
  ButtonGroup,
  Zoom,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useEffect, useId, useState } from 'react';
export default function Post({
  avatar,
  displayName,
  userName,
  postTime,
  content,
  img,
}) {
  const [heart, setHeart] = useState(false);
  const moreId = useId();
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <Box className="border-b relative z-0 p-3 pb-1 pr-5 pl-5">
      <div className="flex w-full">
        <Avatar src={avatar} />
        <div className="w-full overflow-hidden">
          <div className="flex w-full pl-3 overflow-hidden">
            <div className="flex gap-2 items-center w-11/12 truncate">
              <Typography className="font-bold font-sans">
                {displayName}
              </Typography>
              <Typography className="font-sans text-gray-400 font-light">
                {userName}
              </Typography>
              <FiberManualRecordRoundedIcon
                sx={{ fontSize: 5 }}
                className="text-gray-400 font-light"
              />
              <Typography>
                {postTime}.
              </Typography>
            </div>
            <div className="w-1/12">
              <Tooltip id={'postMore' + moreId} title="เพิ่มเติม">
                <IconButton
                  onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                  }}
                  size="small"
                >
                  <MoreHorizRoundedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Menu
                id={'postMenuMore' + moreId}
                anchorEl={anchorEl}
                open={anchorEl != null}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                onClose={() => {
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  'aria-labelledby': 'postMore' + moreId,
                }}
              >
                <MenuItem className="font-sans">ไม่สนใจโพสนี้</MenuItem>
                <MenuItem className="font-sans">เลิกติดตาม</MenuItem>
              </Menu>
            </div>
          </div>
          <div>
            <Typography>{content}</Typography>
          </div>
          {img ? (
            <div className="p-3 pb-0 pt-2">
              <img src={img} className="rounded-xl border border-gray-200" />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="w-full pt-3 flex justify-around">
        <Tooltip title="ตอบกลับ">
          <IconButton>
            {' '}
            <ChatBubbleOutlineRoundedIcon className="text-base" />{' '}
          </IconButton>
        </Tooltip>
        <Tooltip title="รีโพส">
          <IconButton>
            {' '}
            <ReplyRoundedIcon className="text-base" />{' '}
          </IconButton>
        </Tooltip>
        {!heart ? (
          <Tooltip title="ชื่นชอบ">
            <IconButton
              onClick={() => {
                setHeart(true);
              }}
            >
              <FavoriteBorderRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <Zoom in={true}>
            <Tooltip title="ชื่นชอบ">
              <IconButton
                onClick={() => {
                  setHeart(false);
                }}
              >
                <FavoriteRoundedIcon fontSize="small" className="text-red-500" />
              </IconButton>
            </Tooltip>
          </Zoom>
        )}
      </div>
    </Box>
  );
}
