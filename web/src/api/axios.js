import axios from "axios";

const api = axios.create({
  baseURL: "https://supabase-learn-three.vercel.app",
  timeout: 5000,
});

export default api;
