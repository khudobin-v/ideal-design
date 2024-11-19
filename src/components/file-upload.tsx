"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) {
      setMessage("Выберите файл перед загрузкой");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setMessage(result.message);
      console.log("Uploaded file path:", result.filePath);
    } catch (error) {
      setMessage("Ошибка загрузки файла");
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Загрузить</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default FileUpload;
