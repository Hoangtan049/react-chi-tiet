import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Stack, ImageList, ImageListItem } from "@mui/material";
export default function ColorTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      display={"flex"}
      sx={{ width: "100%" }}
      justifyContent="center"
      alignItems="center"
      flexDirection={"row"}
    >
      <Stack spacing={5}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {Anh.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>

      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
      </Tabs>
    </Box>
  );
}

const Anh = [
  {
    img: "https://adoreyou.vn/wp-content/uploads/cute-hot-girl-700x961.jpg",
    title: "gái đẹp",
  },
];
