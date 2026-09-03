import React, { useState } from "react";
import { Youtube, Pencil, Trash2 } from "lucide-react";

function getEmbedUrl(input) {
  if (!input) return null;
  const trimmed = input.trim();
  const idMatch = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/
  );
  const id = idMatch ? idMatch[1] : null;
  if (id) return `https://www.youtube.com/embed/${id}`;
  if (/^[A-Za-z0-9_-]{6,}$/.test(trimmed)) return `https://www.youtube.com/embed/${trimmed}`;
  return null;
}

export default function YouTubeEmbed({ storageKey, label = "Project Video" }) {
  const [url, setUrl] = useState(() => localStorage.getItem(storageKey) || "");
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(!url);
  const [error, setError] = useState("");

  const embedUrl = getEmbedUrl(url);

  const save = () => {
    const parsed = getEmbedUrl(input);
    if (!parsed) {
      setError("Please enter a valid YouTube link.");
      return;
    }
    localStorage.setItem(storageKey, parsed);
    setUrl(parsed);
    setInput("");
    setError("");
    setEditing(false);
  };

  const remove = () => {
    localStorage.removeItem(storageKey);
    setUrl("");
    setEditing(true);
  };

  return null;



























































}