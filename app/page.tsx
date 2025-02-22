import TextDiffChecker from "@/components/TextDiffChecker";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">TxtCompare</h1>
      <TextDiffChecker />
    </div>
  );
}
