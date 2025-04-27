import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  // تنظیمات پایه Axios (مثلاً URL پایه)
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', // جایگزین با API خود
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // افزودن نمونه Axios به اپلیکیشن
  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
