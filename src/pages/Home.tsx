// pages/Home.tsx
import { Box, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Carousel from "../components/Carousel";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const companies = useSelector(
    (state: RootState) => state.portfolio.companies
  );

  // 用於切換圖片樣式的 state
  const [isExpanded, setIsExpanded] = useState(false);

  // 滾動事件處理
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      // 滾動超過 300px 後圖片展開
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="box-background">
      <Typography variant="h2" color="primary" className="home-page">
        歡迎來到XXX的世界
      </Typography>
      <Typography variant="h5" color="secondary" sx={{ margin: "2rem 0" }}>
        {companies.join(" · ")}
      </Typography>

      <Typography variant="h4" color="primary">
        關於我
      </Typography>
      <Typography variant="body1" sx={{ margin: "1rem 0" }}>
        兩年經驗前端工程師，專注於使用React、TypeScript等技術，協助企業數位化轉型...
      </Typography>

      {/* 新增五欄結構，使用 Box + Flexbox 佈局 */}
      <Box className="my-work-text">
        <Box sx={{ textAlign: "center", flexBasis: "15%" }}>
          <Typography variant="h3">2</Typography>
          <Typography variant="body1">年前端開發經驗</Typography>
          <Typography variant="body2">熟悉CSS、HTML、GIT使用</Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box sx={{ textAlign: "center", flexBasis: "15%" }}>
          <Typography variant="h3">2</Typography>
          <Typography variant="body1">種前端程式框架</Typography>
          <Typography variant="body2">Vue、React專案實作經驗</Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box sx={{ textAlign: "center", flexBasis: "15%" }}>
          <Typography variant="h3">4</Typography>
          <Typography variant="body1">家成功案例</Typography>
          <Typography variant="body2">網頁設計服務最佳化</Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box sx={{ textAlign: "center", flexBasis: "15%" }}>
          <Typography variant="h3">10</Typography>
          <Typography variant="body1">人團隊合作經驗</Typography>
          <Typography variant="body2">善於團隊溝通</Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box sx={{ textAlign: "center", flexBasis: "15%" }}>
          <Typography variant="h3">60</Typography>
          <Typography variant="body1">位夥伴專業服務</Typography>
          <Typography variant="body2">穩定守護您的事業</Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: "250px", marginBottom: "250px" }}>
        <Typography
          variant="h4"
          color="primary"
          sx={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          技能專長
        </Typography>
        {/* 輪播畫面 */}
        <Carousel />
      </Box>

      {/* 圓形圖片，滾動後展開 */}
      <Box
        component="img"
        src="/photo/aboutWork.jpg"
        alt="My Image"
        className={isExpanded ? "expanded-image" : "circle-image"}
      />

      <Box sx={{ marginTop: "250px", marginBottom: "250px" }}>
        <Typography
          variant="h4"
          color="primary"
          sx={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          技能專長
        </Typography>
        {/* 輪播畫面 */}
        <Carousel />
      </Box>
    </Box>
  );
};

export default Home;
