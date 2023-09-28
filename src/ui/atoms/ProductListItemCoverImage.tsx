import NextImage from "next/image";

export const ProductListItemCoverImage = ({ src, alt }: { src: string; alt?: string | null }) => {
	return (
		<div className="aspect-square h-80 w-80 overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<NextImage
				className="h-full w-full transform object-contain object-center p-4 transition-transform duration-300 ease-in-out hover:scale-105"
				src={src}
				alt={alt || "image"}
				width={320}
				height={320}
			/>
		</div>
	);
};
