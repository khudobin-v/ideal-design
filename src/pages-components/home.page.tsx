import { About, Hero, Projects } from "@/templates";

export const Home = () => {
  return (
    <div className="flex h-full flex-col">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};
