import {
  Button,
  CardContent,
  Container,
  Drawer,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';

import HeadSearch from './HeadSearch';

export default function Rightbar() {
  return (
    <div className="border-l w-3/12 border-gray-100 max-lg:hidden">
      <HeadSearch />
      <div className="p-5 sticky top-0">
        <Paper sx={{p:3,mb:3}}>
          <h6  className="text-xl font-bold">
            รับการยืนยัน
          </h6>
          <p className="font-bold text-sm">
            สมัครสมาชิกเพื่อปลดล็อกคุณสมบัติใหม่
          </p>
          <Button
            color="secondary"
            variant="contained"
            
          >
            <p>รับการยืนยัน</p>
          </Button>
        </Paper>
        <Paper sx={{p:3,mb:3}}>
          <Typography variant="h6" className="font-bold">
            ความนิยมสำหรับคุณ
          </Typography>
        </Paper>
        <Paper sx={{p:3,mb:3}}>
          <Typography variant="h6" className="font-bold">
            ติดตามใครดี
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
