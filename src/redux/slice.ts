// redux/slice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: ['智慧價值', '京東', '快樂生技'],
  skills: ['JavaScript', 'TypeScript', 'CSS', 'HTML', 'VueJS', 'ReactJS'],
  projects: [
    { title: '教育學習平台案', description: '打造線上教育學習平台' },
    { title: '政府部門後台案', description: '協助政府部門數位化轉型' },
    { title: '傳統產業轉型案', description: '協助傳產進行數位轉型' },
    { title: '交友網站案', description: '開發高效能交友平台' }
  ]
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {}
});

export default portfolioSlice.reducer;