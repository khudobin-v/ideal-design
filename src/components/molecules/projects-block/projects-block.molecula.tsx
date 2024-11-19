import { links } from "@/utils/links";
import Image from "next/image";

export const ProjectsBlock = () => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-center text-6xl font-bold tracking-wide max-lg:text-5xl">
        Проекты
      </h1>
      {links.map((link, index) => (
        <Image
          key={index}
          src={link}
          alt="project-photo"
          width={100}
          height={200}
        />
      ))}
    </div>
  );
};
