import { ArrowRight, VerifiedIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./shadcn-ui/badge";

export interface StoreEntityType {
	id: string;
	name: string;
	description: string;
	logoUrl: string;
	bannerUrl?: string;
	department: string;
	location: string;
	contactEmail?: string;
	contactPhone?: string;
	rating?: number; // average rating, e.g., 4.5
	itemsCount?: number; // number of listed materials
	categories?: string[]; // item categories like ["Electronics", "Books"]
	createdAt?: string; // ISO date string
	updatedAt?: string; // ISO date string
	isVerified?: boolean; // whether admin verified this store
	socialLinks?: {
		website?: string;
		instagram?: string;
		facebook?: string;
		twitter?: string;
	};
	tags?: string[]; // keywords for search or filtering
}

interface StoreProps {
	props: StoreEntityType;
}
export default function Store({ props }: StoreProps) {
	return (
		<div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
			<div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
				<Image
					src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
					alt="placeholder"
					className="aspect-29/35 h-full w-full max-w-60 rounded-none object-cover"
					height={500}
					width={500}
				/>
				<div className="flex h-full flex-col justify-between gap-10">
					<q className="sm:text-2xl">{props.description}</q>
					<div className="flex items-end justify-between gap-6">
						<div className="flex flex-col gap-1">
							<p className="font-semibold text-lg text-primary">{props.name}</p>
							<p className="text-muted-foreground">{props.department}</p>
						</div>
						<Image
							src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
							alt="logo"
							height={120}
							width={120}
						/>
					</div>
				</div>
			</div>
			<div className="flex gap-10 self-center lg:flex-col">
				<div className="flex flex-col gap-2">
					<p className="font-medium text-4xl text-primary sm:text-5xl">
						{props.itemsCount}
					</p>
					<p className="font-semibold text-primary">Listed items</p>
					<p className="text-muted-foreground">
						{props.isVerified ? (
							<Badge>
								Verified <VerifiedIcon size={4} />
							</Badge>
						) : (
							<Badge variant="outline">Not verified</Badge>
						)}
					</p>
				</div>
				<div className="flex justify-start">
					<Link
						href={`/stores/${props.id}`}
						className="border-b font-semibold text-primary"
					>
						<span className="flex items-center gap-1">
							Visit Store
							<ArrowRight className="size-5" />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
