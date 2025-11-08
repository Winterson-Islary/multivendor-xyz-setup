"use client";
import { useStoreId } from "@/hooks/features/store/useStoreId";

export default function StoreIdPage() {
	const storeId = useStoreId();
	return (
		<article>
			<h1 className="text-xl">Store: {storeId}</h1>
		</article>
	);
}
