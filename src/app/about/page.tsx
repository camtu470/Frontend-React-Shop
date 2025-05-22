import Banner from "@/components/home-page/banner";
import Introduce from "@/components/home-page/introduce";

export default function AboutPage() {
  return (
    <div className="p-8">
      <Banner />
      <Introduce />
      <h1 className="text-2xl font-bold mt-8">About Page</h1>
      <p>This page provides information about us.</p>
    </div>
  );
}
