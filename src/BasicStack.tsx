import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const items = ["Thời sự","Thế giới","Kinh tế","Đời sống","Sức khỏe","Giới trẻ","Giáo dục","Du lịch","Văn hóa","Giải trí","Thể thao","Công nghệ - Game","Xe","Video","Tiêu dùng","Thời trang trẻ"]
export default function DirectionStack() {
  return (
    <div>
      


      <Stack direction="row" spacing={2}justifyContent="center"
  alignItems="center"
 >
       {items.map((item)=>(<Item>{item}</Item>))}
      </Stack>
    </div>
  );
}