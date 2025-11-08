import Store, { type StoreEntityType } from "@/components/store";

const mockStores: StoreEntityType[] = [
	{
		id: "store-1",
		name: "Computer Science Department Store",
		description:
			"Selling unused electronics, lab peripherals, and computing accessories from the CS labs.",
		logoUrl: "/images/stores/cs-logo.png",
		bannerUrl: "/images/stores/cs-banner.jpg",
		department: "Computer Science and Engineering",
		location: "Block A - 3rd Floor, Lab 301",
		contactEmail: "csstore@college.edu",
		contactPhone: "+91 9876543210",
		rating: 4.7,
		itemsCount: 42,
		categories: ["Electronics", "Books", "Peripherals"],
		createdAt: "2025-10-01T09:30:00Z",
		updatedAt: "2025-11-02T10:00:00Z",
		isVerified: true,
		tags: ["tech", "hardware", "coding"],
	},
	{
		id: "store-2",
		name: "Mechanical Engineering Store",
		description:
			"Collection of workshop tools, spare machine parts, and mechanical prototypes available for reuse.",
		logoUrl: "/images/stores/mech-logo.png",
		bannerUrl: "/images/stores/mech-banner.jpg",
		department: "Mechanical Engineering",
		location: "Workshop Block - Ground Floor",
		contactEmail: "mechstore@college.edu",
		rating: 4.3,
		itemsCount: 28,
		categories: ["Tools", "Metal Parts", "Machines"],
		createdAt: "2025-09-15T11:00:00Z",
		updatedAt: "2025-11-03T14:30:00Z",
		isVerified: true,
		tags: ["mechanical", "workshop", "lab"],
	},
	{
		id: "store-3",
		name: "Civil Department Store",
		description:
			"Offers leftover building materials, surveying instruments, and lab models.",
		logoUrl: "/images/stores/civil-logo.png",
		department: "Civil Engineering",
		location: "Block C - Basement",
		contactEmail: "civilstore@college.edu",
		rating: 4.1,
		itemsCount: 35,
		categories: ["Materials", "Instruments", "Models"],
		createdAt: "2025-08-20T13:15:00Z",
		updatedAt: "2025-10-30T17:45:00Z",
		isVerified: false,
		tags: ["surveying", "models"],
	},
	{
		id: "store-4",
		name: "Electrical Department Store",
		description:
			"Used circuits, wires, testing boards, and transformers for reuse.",
		logoUrl: "/images/stores/ee-logo.png",
		department: "Electrical Engineering",
		location: "Block B - Lab 2",
		contactEmail: "electricalstore@college.edu",
		rating: 4.5,
		itemsCount: 31,
		categories: ["Electronics", "Testing", "Wires"],
		createdAt: "2025-10-10T10:00:00Z",
		updatedAt: "2025-11-05T09:00:00Z",
		isVerified: true,
		tags: ["circuits", "testing"],
	},
	{
		id: "store-5",
		name: "Architecture Department Store",
		description:
			"Models, drawing kits, and unused studio materials from architecture projects.",
		logoUrl: "/images/stores/arch-logo.png",
		department: "Architecture",
		location: "Design Block - 2nd Floor",
		contactEmail: "archstore@college.edu",
		rating: 4.8,
		itemsCount: 18,
		categories: ["Models", "Stationery", "Art Supplies"],
		createdAt: "2025-09-05T08:45:00Z",
		updatedAt: "2025-11-01T15:00:00Z",
		isVerified: true,
		tags: ["design", "studio", "art"],
	},
];
export default function StoresPage() {
	return (
		<article className="h-full w-full py-32">
			<div className="w-full">
				<div className="mt-20 flex flex-col gap-40">
					{mockStores.map((props) => (
						<Store key={props.id} props={props} />
					))}
				</div>
			</div>
		</article>
	);
}
