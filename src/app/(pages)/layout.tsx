import Navbar from "@/components/navbar2";

interface LayoutProps {
	children: Readonly<React.ReactNode>;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<article className="mx-auto grid h-full min-h-screen w-full max-w-screen-2xl grid-rows-[auto_1fr] gap-7 px-4">
			<nav className="sticky top-0 w-full">
				<Navbar />
			</nav>
			<section className="h-full w-full">{children}</section>
		</article>
	);
}
