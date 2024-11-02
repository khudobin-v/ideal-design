import {
  About,
  Contacts,
  Hero,
  Projects,
  Reviews,
  Services,
} from "@/templates";

export const Home = () => {
  return (
    <div className="flex h-full flex-col">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Reviews />
      <Contacts />
    </div>
  );
};
