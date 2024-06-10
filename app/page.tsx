import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const state = true;
  return (
    <div className="">
    <p className="text-red-500">Discord App</p>
    <Button className={cn(
       "bg-yellow-500", state && "bg-green-500",
    )}>Akash</Button>
    </div>
  );
}
