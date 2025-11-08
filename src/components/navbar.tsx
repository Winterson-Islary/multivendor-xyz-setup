import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./shadcn-ui/button";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "700",
});

export default function Navbar() {
	return (
		<main className="items-between hidden h-20 w-full justify-between border-black border-x border-b lg:flex">
			<Link href="/" className="flex items-center pl-6">
				<span className={cn("font-semibold text-5xl", poppins.className)}>
					hyp.store
				</span>
			</Link>
			<section>
				<Button className="h-full w-40 cursor-pointer rounded-none border border-black border-y-0 border-r-0 bg-white py-6 text-black text-xl hover:bg-purple-300">
					<Link href="/sign-in">Log in</Link>
				</Button>
				<Button className="h-full w-40 cursor-pointer rounded-none border border-black border-y-0 border-r-0 bg-black py-6 text-white text-xl hover:bg-purple-300 hover:text-black">
					<Link href="/sign-up">Sign up</Link>
				</Button>
			</section>
		</main>
	);
}
