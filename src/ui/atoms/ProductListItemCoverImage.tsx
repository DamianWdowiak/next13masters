export const ProductListItemCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				className="h-full w-full transform object-contain object-center p-4 transition-transform duration-300 ease-in-out hover:scale-105"
				src={src}
				alt={alt}
				width={320}
				height={320}
			/>
		</div>
	);
};
