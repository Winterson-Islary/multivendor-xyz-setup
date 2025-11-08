"use client";

import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/shadcn-ui/accordion";
import { Button } from "@/components/shadcn-ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/shadcn-ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/shadcn-ui/sheet";
import { cn } from "@/lib/utils";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "700",
});

export default function Navbar() {
	const features = [
		{
			title: "Dashboard",
			description: "Overview of your activity",
			href: "#",
		},
		{
			title: "Analytics",
			description: "Track your performance",
			href: "#",
		},
		{
			title: "Settings",
			description: "Configure your preferences",
			href: "#",
		},
		{
			title: "Integrations",
			description: "Connect with other tools",
			href: "#",
		},
		{
			title: "Storage",
			description: "Manage your files",
			href: "#",
		},
		{
			title: "Support",
			description: "Get help when needed",
			href: "#",
		},
	];

	return (
		<section className="py-4">
			<div className="w-full">
				<nav className="flex w-full items-center justify-between">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
							className="max-h-8"
							height={25}
							width={25}
							alt="Shadcn UI Navbar"
						/>
						<span
							className={cn(
								"font-normal text-2xl tracking-tight",
								poppins.className,
							)}
						>
							campus.store
						</span>
					</Link>
					<NavigationMenu className="hidden lg:block">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Features</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-[600px] grid-cols-2 p-3">
										{features.map((feature) => (
											<NavigationMenuLink
												href={feature.href}
												key={feature.title}
												className="rounded-md p-3 transition-colors hover:bg-muted/70"
											>
												<div key={feature.title}>
													<p className="mb-1 font-semibold text-foreground">
														{feature.title}
													</p>
													<p className="text-muted-foreground text-sm">
														{feature.description}
													</p>
												</div>
											</NavigationMenuLink>
										))}
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/products"
									className={navigationMenuTriggerStyle()}
								>
									Products
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/stores"
									className={navigationMenuTriggerStyle()}
								>
									Stores
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/contact"
									className={navigationMenuTriggerStyle()}
								>
									Contact
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<div className="hidden items-center gap-4 lg:flex">
						<Button variant="outline" className="">
							<Link href="/sign-in">Sign in</Link>
						</Button>
						<Button className="">
							{" "}
							<Link href="/sign-up">Create account</Link>
						</Button>
					</div>

					<Sheet>
						<SheetTrigger asChild className="lg:hidden">
							<Button variant="outline" size="icon">
								<MenuIcon className="h-4 w-4" />
							</Button>
						</SheetTrigger>
						<SheetContent side="top" className="max-h-screen overflow-auto">
							<SheetHeader>
								<SheetTitle>
									<Link href="/" className="flex items-center gap-2">
										<Image
											src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
											className="max-h-8"
											height={25}
											width={25}
											alt="Shadcn UI Navbar"
										/>
										<span
											className={cn(
												"font-normal text-2xl tracking-tight",
												poppins.className,
											)}
										>
											campus.store
										</span>
									</Link>
								</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col p-4">
								<Accordion type="single" collapsible className="mt-4 mb-2">
									<AccordionItem value="solutions" className="border-none">
										<AccordionTrigger className="text-base hover:no-underline">
											Features
										</AccordionTrigger>
										<AccordionContent>
											<div className="grid md:grid-cols-2">
												{features.map((feature) => (
													<a
														href={feature.href}
														key={feature.title}
														className="rounded-md p-3 transition-colors hover:bg-muted/70"
													>
														<div key={feature.title}>
															<p className="mb-1 font-semibold text-foreground">
																{feature.title}
															</p>
															<p className="text-muted-foreground text-sm">
																{feature.description}
															</p>
														</div>
													</a>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
								<div className="flex flex-col gap-6">
									<Link href="/stores" className="font-medium">
										Stores
									</Link>
									<Link href="/products" className="font-medium">
										Products
									</Link>
									<Link href="/contact" className="font-medium">
										Contact
									</Link>
								</div>
								<div className="mt-6 flex flex-col gap-4">
									<Button variant="outline" className="h-full">
										<Link href="/sign-in" className="h-full">
											Sign in
										</Link>
									</Button>
									<Button className="h-full">
										<Link href="/sign-up" className="h-full">
											Start selling
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</nav>
			</div>
		</section>
	);
}
