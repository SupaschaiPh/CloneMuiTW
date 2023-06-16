import { Button } from "@mui/material";
import Layout2 from "../components/Layout2";

export default function NotFound(){
  return (
    <Layout2>
      <div className="w-9/12 pt-28 flex flex-col items-center">
        <p className="text-center" >หืมม... ไม่พบหน้าที่คุณต้องการ ลองค้นหารายการอื่นแทน</p>
        <a href="/explore" ><Button variant="contained" className="mt-5 rounded-full bg-sky-500" >ค้นหา</Button></a>
      </div>
    </Layout2>
  )
}