import { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Отключаем встроенный bodyParser
  },
};

// Функция-обработчик API
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const uploadDir = path.join(process.cwd(), "public/uploads");

    // Создаем папку, если она не существует
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileChunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => fileChunks.push(chunk));
    req.on("end", () => {
      const buffer = Buffer.concat(fileChunks);
      const fileName = `uploaded-${Date.now()}.jpg`; // Уникальное имя файла
      const fullFilePath = path.join(uploadDir, fileName);

      fs.writeFileSync(fullFilePath, buffer);

      res
        .status(200)
        .json({
          message: "Файл успешно загружен!",
          filePath: `/uploads/${fileName}`,
        });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "Метод не поддерживается" });
  }
}
