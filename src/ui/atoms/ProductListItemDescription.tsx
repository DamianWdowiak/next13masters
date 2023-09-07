export const ProductListItemDescription = ({
	name,
	price,
	category,
}: {
	name: string;
	price: number;
	category: string;
}) => {
	const formattedPrice = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);

	return (
		<div className="flex w-full flex-col">
			<div className="flex justify-between">
				<h3 className="text-lg font-medium text-gray-800">{name}</h3>
				<p className="text-sm font-bold text-gray-800">{formattedPrice}</p>
			</div>
			<p className="text-sm font-medium text-gray-500">{category}</p>
		</div>
	);
};
