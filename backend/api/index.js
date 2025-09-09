import express from "express";
import cors from "cors";
import { supabase } from "../supabaseClient.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Get all todos
app.get("/todos", async (req, res) => {
  const { data, error } = await supabase.from("todos").select("*");
  console.log(data, error);
  if (error) return res.status(500).json(error);
  res.json(data);
});

// ✅ Add new todo
app.post("/todos", async (req, res) => {
  const { title } = req.body;
  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, completed: false }])
    .select();
  if (error) return res.status(500).json(error);
  res.json(data[0]); // inserted row return karega
});

// ✅ Update todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const { data, error } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", id)
    .select();
  if (error) return res.status(500).json(error);
  res.json(data[0]);
});

// ✅ Delete todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("todos").delete().eq("id", id);
  if (error) return res.status(500).json(error);
  res.json({ message: "Todo deleted" });
});

// Run server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
