import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Welcome to Next.js LAIQA SAJJAD!</h2>
      <Button>Subscribe</Button>
      <UserButton/>
    </div>
  );
}
