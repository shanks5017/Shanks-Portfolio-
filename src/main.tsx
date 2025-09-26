import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { supabase } from "./lib/supabaseClient";

createRoot(document.getElementById("root")!).render(<App />);

// Simple startup check so you can verify Supabase is wired up
if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.log(
    "[Supabase] Client initialized",
    { url: import.meta.env.VITE_SUPABASE_URL }
  );
} else {
  console.warn("[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in your environment");
}
