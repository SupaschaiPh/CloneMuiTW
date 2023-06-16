import { Button, CardContent, Container,Drawer, List, ListItem, Paper, Typography } from "@mui/material";


export default function Rightbar(){
  return (
    <div className="border-l w-3/12 border-gray-100 max-lg:hidden">
      <div className="p-5 sticky top-0">
        <Paper className="p-3 h-full">
          <h1  className="text-xl font-bold" >ติดตามใครดี</h1>
        </Paper>
      </div>
    </div>
  )
}