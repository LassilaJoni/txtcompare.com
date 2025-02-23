import Footer from "@/components/Footer";
import TextDiffChecker from "@/components/TextDiffChecker";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4 flex-grow">
        <h1 className="text-2xl font-bold">TxtCompare</h1>
        <TextDiffChecker />
      </div>
      <Footer />
    </div>
  );
}
