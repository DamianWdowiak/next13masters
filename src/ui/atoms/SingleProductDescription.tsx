import { formatPrice } from "@/ui/utils";

export const SingleProductDescription = ({
	name,
	price,
	description,
}: {
	name: string;
	price: number;
	description: string;
}) => {
	return (
		<div className="mb-auto flex w-full max-w-xl flex-col items-start gap-3 px-6">
			<h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">{name}</h1>
			<p className="font-base text-lg text-gray-800">{formatPrice(price)}</p>
			<p className="font-sans text-base text-gray-500">{description}</p>
		</div>
	);
};
