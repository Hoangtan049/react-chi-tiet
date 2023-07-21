import React from "react";
import "./index.css";
import { CenterFocusStrong } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const TestImage = () => {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
      <h2 style={{ fontSize: 30 }}>
        Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại Nghĩa trang Hàng Dương
      </h2>
      <p>
        <span className="glyphicon glyphicon-user"> </span>
        <span style={{ marginLeft: 10, fontSize: 13 }}>
          Dương Võ Hoàng Tấn - hoangtan10103@gmail.com
        </span>
        <span style={{ marginLeft: 200, fontSize: 12 }}>
          19/07/2023 12:04 GMT+7
        </span>
      </p>
      <h4>
        Chủ tịch nước Võ Văn Thưởng dẫn đầu đoàn lãnh đạo Đảng, Nhà nước đến
        viếng, dâng hương tưởng niệm các anh hùng liệt sĩ, chiến sĩ cách mạng,
        đồng bào yêu nước tại Nghĩa trang Hàng Dương, Côn Đảo.
      </h4>
      <h4>
        Ngày 19.7,{" "}
        <a href="https://thanhnien.vn/chu-tich-nuoc-vo-van-thuong-sap-tham-y-toa-thanh-vatican-va-ao-185230717195727247.htm">
          Chủ tịch nước Võ Văn Thưởng
        </a>{" "}
        đã đến viếng, dâng hương tưởng niệm các{" "}
        <a href="https://thanhnien.vn/ba-ria-vung-tau-truy-niem-cac-anh-hung-liet-si-hy-sinh-tai-con-dao-185230717155037135.htm">
          anh hùng liệt sĩ
        </a>
        , chiến sĩ cách mạng, đồng bào yêu nước tại Nghĩa trang Hàng Dương,
        H.Côn Đảo (Bà Rịa - Vũng Tàu).
      </h4>
      &ensp;
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z45288477469784f4f05956b5a9fb513b285e720e0b2d2-16897387515521319102708.jpg"
        width={640}
        height={400}
        alt="Chủ tịch dâng hương "
        loading="lazy"
      ></img>
      <h5 style={{ textAlign: "center" }}>
        Chủ tịch nước Võ Văn Thưởng dâng hương tại Nghĩa trang Hàng Dương
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <h4>
        Tham dự lễ viếng, dâng hương còn có nguyên Chủ tịch nước Nguyễn Minh
        Triết và nguyên Chủ tịch nước Trương Tấn Sang.
      </h4>
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z45288508340764ecdd5fff791d8dab76864e9f446b36e-16897388108042130752622.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Chủ tịch nước Võ Văn Thưởng cùng nguyên Chủ tịch nước Nguyễn Minh Triết
        (bìa trái) và nguyên Chủ tịch nước Trương Tấn Sang (bìa phải)
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <h4>
        Dự lễ viếng còn có ông Nguyễn Trọng Nghĩa, Trưởng ban Tuyên giáo Trung
        ương; bà Bùi Thị Minh Hoài, Trưởng ban Dân vận Trung ương.
      </h4>
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z4528870581509d1781d3e58616975aa3be74a7541a113-16897391056051365253904.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Ông Nguyễn Trọng Nghĩa (ở giữa), Trưởng ban Tuyên giáo Trung ương thắp
        hương lên mộ anh hùng liệt sĩ Võ Thị Sáu
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <h4>
        Ngoài ra còn có gần 80{" "}
        <a href="https://thanhnien.vn/hoi-lhtn-viet-nam-se-to-chuc-gap-mat-cuu-tu-chinh-tri-con-dao-185178158.htm">
          cựu tù chính trị Côn Đảo
        </a>{" "}
        cũng đến viếng và dâng hương tại Nghĩa trang Hàng Dương
      </h4>
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z4528706485905bf1bffd0fa815563fac4ad946d1a648b-16897392065531330752484.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Bộ đội dìu các cựu tù chính trị Côn Đảo lên dâng hương
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG</h5>
      &ensp;
      <Stack
        style={{
          marginLeft: 0,
          backgroundColor: "wheat",
          width: 680,
          height: 250,
        }}
      >
        <h1>Dành cho bạn </h1>
        <ImageList sx={{ width: 640, height: 400 }} cols={3} rowHeight={160}>
          {itemData.map((item) => (
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
      &ensp;
      <h4>
        Ngay sau lễ viếng, Chủ tịch nước Võ Văn Thưởng và bà Bùi Thị Minh Hoài,
        Trưởng ban Dân vận Trung ương cùng các thành viên đã{" "}
        <a href="https://thanhnien.vn/tang-cay-luu-niem-mung-dai-tuong-vo-nguyen-giap-tron-100-tuoi-185349914.htm">
          {" "}
          trồng cây lưu niệm{" "}
        </a>
        trong khuôn viên nghĩa trang.
      </h4>
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z4528732684446bada22d438cdb457174e58f2df55352e-16897383310052128665378.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Chủ tịch nước Võ Văn Thưởng và Bí thư Tỉnh ủy Bà Rịa - Vũng Tàu Phạm
        Viết Thanh trồng cây trong khuôn viên nghĩa trang
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <h4>
        Tiếp đó, Chủ tịch nước cùng đoàn lãnh đạo Đảng, Nhà nước đã dự lễ giỗ
        các{" "}
        <a href="https://thanhnien.vn/chu-tich-quoc-hoi-tri-an-anh-hung-liet-si-gia-dinh-co-cong-tai-quang-tri-185230716193510323.htm">
          anh hùng liệt sĩ
        </a>
        , chiến sĩ cách mạng, đồng bào yêu nước tại Đền thờ Côn Đảo.
      </h4>
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z452870642444744fa7014fada4eeb437b8c8779c96d72-16897394014532118427937.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Các đại biểu dự lễ giỗ
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <h4>
        Dưới đây là những hình ảnh PV Báo Thanh Niên ghi lại tại buổi viếng và
        dâng hương:
      </h4>
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z45287450609107ceb24c51d9b64d2dd70069581747467-16897383312491925410972.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Chủ tịch nước Võ Văn Thưởng thắp hương lên mộ phần liệt sĩ trong Nghĩa
        trang Hàng Dương
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z4528737421311bf1175fda3997422eaf86ad8c2004a38-1689738331093444504726.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Bí thư Tỉnh ủy Bà Rịa - Vũng Tàu Phạm Viết Thanh thắp hương lên mộ phần
        liệt sĩ tại nghĩa trang
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z4528706497572de9a61aea8cd93399f01a6deb50bf83c-1689739623288567386932.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Nguyên Chủ tịch nước Trương Tấn Sang thăm hỏi Bí thư Tỉnh ủy Đồng Nai
        Nguyễn Hồng Lĩnh
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/edit-z4528706454693962efafa1cdd18d877aea1f4840e522c-1689739772751524165169.png"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Bí thư Tỉnh ủy Đồng Nai Nguyễn Hồng Lĩnh thắp hương lên mộ của cố Tổng
        Bí thư Lê Hồng Phong
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z4528706507337d72ca5985967d01e9a6d426c78378f43-16897383306041350646491.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Phó bí thư Tỉnh đoàn Bà Rịa - Vũng Tàu Nguyễn Minh Triết đưa bà Nguyễn
        Thị Mỹ, Chủ tịch Hội Người tù kháng chiến tỉnh đến dâng hương
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z45287064373787590f902a343e3e6fa87e3917bec8f03-16897383297541417758555.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Ông Nguyễn Minh Triết, nguyên Chủ tịch nước thắp hương lên mộ phần liệt
        sĩ
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/7/19/z452872544230634fc53839b05d4b9b91a66d8881e5022-16897383309021892338404.jpg"
        width={640}
        height={400}
        alt="Chủ tịch nước Võ Văn Thưởng viếng, dâng hương tại nghĩa trang Hàng Dương"
        loading="lazy"
      ></img>
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Chủ tịch nước Võ Văn Thưởng nguyện chuông khai lễ giỗ
      </h5>
      <h5 style={{ textAlign: "center" }}>NGUYỄN LONG </h5>
      &ensp;
    </div>
  );
};
const itemData = [
  {
    img: "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/7/19/z452887981326326258250fda4231355cab36615376bc7-1689739217964258485609.jpg",
    title: "Breakfast",
  },
  {
    img: "https://images2.thanhnien.vn/528068263637045248/2023/7/19/a1-16897459394401260928859.png",
    title: "Burger",
  },
  {
    img: "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/6/17/edit-bhxh-tphcm-1686969099928741858945.png",
    title: "Camera",
  },
];
