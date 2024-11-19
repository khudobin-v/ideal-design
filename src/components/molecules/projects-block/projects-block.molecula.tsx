"use client";

import { ListObjectsV2Command, S3Client, _Object } from "@aws-sdk/client-s3";
import { useEffect, useState } from "react";

import { Carousel } from "../carousel";

export const ProjectsBlock = () => {
  const [files, setFiles] = useState<_Object[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilesFromS3 = async () => {
      const s3 = new S3Client({
        region: "ru-1", // Параметр региона
        endpoint: "https://s3.timeweb.cloud", // Параметр endpoint
        credentials: {
          accessKeyId: "ANM0GPRNKC48ORV9FAI1",
          secretAccessKey: "Ceuh40v1BtFHA1uNqzMf6i2hjWz5PsJu8Bd5luUY",
        },
        forcePathStyle: true, // Для использования с Timeweb
      });

      try {
        const data = await s3.send(
          new ListObjectsV2Command({
            Bucket: "64ef3069-ideal", // Ваш бакет
          }),
        );

        // Устанавливаем файлы в состояние
        setFiles(data.Contents || []);
      } catch (err) {
        console.error("Error fetching S3 files:", err);
        setError("Ошибка при получении файлов из S3");
      } finally {
        setLoading(false);
      }
    };

    fetchFilesFromS3();
  }, []);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-12 p-20 max-sm:p-8">
      <h1 className="text-center text-6xl font-bold tracking-wide max-lg:text-5xl">
        Проекты
      </h1>
      <Carousel images={files} />
    </div>
  );
};
