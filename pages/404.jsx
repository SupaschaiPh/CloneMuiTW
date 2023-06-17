import { Button } from "@mui/material";
import Layout2 from "../components/Layout2";

export default function NotFound(){
  return (
    <Layout2>
      <div className="w-8/12 pt-28 flex flex-col items-center">
        <div className="text-center" >หืมม... ไม่พบหน้าที่คุณต้องการ ลองค้นหารายการอื่นแทน</div>
        <a href="/explore" ><Button variant="contained" sx={{mt:3}}>ค้นหา</Button></a>
      </div>
    </Layout2>
  )
}