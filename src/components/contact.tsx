import { CornerDownRight } from "lucide-react";
import { Button } from "@/components/shadcn-ui/button";
import { Input } from "@/components/shadcn-ui/input";
import { Textarea } from "@/components/shadcn-ui/textarea";

interface ContactProps {
	title?: string;
	description?: string;
	phone?: string;
	email?: string;
	address?: string;
}

export default function Contact({
	title = "Contact Us",
	description = "Send us a message. Let us know how we can help!",
	phone = "(123) 34567890",
	email = "email@example.com",
	address = "123 Street, Kokrajhar, Assam.",
}: ContactProps) {
	return (
		<section className="w-full">
			<div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
				<div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
					<div className="flex flex-col gap-10 text-center lg:text-left">
						<h1 className="mb-2 font-semibold text-5xl lg:mb-1 lg:text-6xl">
							{title}
						</h1>
						<p className="text-muted-foreground uppercase">{description}</p>
					</div>
				</div>
				<div className="mx-auto flex max-w-3xl flex-col gap-8 p-10">
					<div className="flex flex-col justify-between gap-8 lg:flex-row">
						<section className="flex flex-col">
							<h3 className="font-normal text-muted-foreground">ADDRESS</h3>
							<h1 className="font-medium text-2xl">{address}</h1>
						</section>
						<section className="flex flex-col">
							<h3 className="font-normal text-muted-foreground">{phone}</h3>
							<h1 className="font-medium text-2xl">{email}</h1>
						</section>
					</div>
					<div className="flex flex-col gap-4 md:flex-row">
						<div className="grid w-full items-center gap-1.5">
							<Input
								type="text"
								id="firstname"
								placeholder="NAME*"
								className="rounded-none border-x-0 border-t-0 shadow-none focus-visible:ring-0"
							/>
						</div>
						<div className="grid w-full items-center gap-1.5">
							<Input
								type="text"
								id="phone"
								placeholder="PHONE*"
								className="rounded-none border-x-0 border-t-0 shadow-none focus-visible:ring-0"
							/>
						</div>
						<div className="grid w-full items-center gap-1.5">
							<Input
								type="email"
								id="email"
								placeholder="EMAIL*"
								className="rounded-none border-x-0 border-t-0 shadow-none focus-visible:ring-0"
							/>
						</div>
					</div>
					<div className="grid w-full items-center gap-1.5">
						<Input
							type="text"
							id="subject"
							placeholder="SUBJECT"
							className="rounded-none border-x-0 border-t-0 shadow-none focus-visible:ring-0"
						/>
					</div>
					<div className="grid w-full gap-1.5">
						<Textarea
							placeholder="ENTER YOUR MESSAGE HERE*"
							id="message"
							className="rounded-none border-x-0 border-t-0 shadow-none focus-visible:ring-0"
						/>
					</div>
					<div className="w-full">
						<Button
							variant="outline"
							className="w-auto rounded-none border-none shadow-none"
						>
							<CornerDownRight size="4" />
							SUBMIT NOW
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
