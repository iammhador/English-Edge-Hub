import HomePageHeading from "./components/ui/heading";
import BestStories from "./components/ui/stories";

export default function Home() {
  return (
    <div className="px-20">
      <HomePageHeading />
      <hr />
      <BestStories />
    </div>
  );
}
