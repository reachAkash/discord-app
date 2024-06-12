import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const state = true;
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
