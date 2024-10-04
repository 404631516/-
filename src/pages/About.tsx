// pages/About.tsx
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const About = () => {
  const projects = useSelector((state: RootState) => state.portfolio.projects);

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h3" color="primary">個人自傳</Typography>
      <Typography variant="body1" sx={{ margin: '1rem 0' }}>
        兩年經驗前端工程師，專注於使用React、TypeScript等技術，協助企業數位化轉型...
      </Typography>

      <Typography variant="h4" color="primary">參與過的專案</Typography>
      {projects.map((project, index) => (
        <Box key={index} sx={{ margin: '1rem 0' }}>
          <Typography variant="h5">{project.title}</Typography>
          <Typography variant="body2">{project.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default About;