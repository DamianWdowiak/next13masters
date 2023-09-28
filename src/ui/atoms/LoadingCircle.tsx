export function LoadingCircle() {
	return (
		<div aria-busy="true" className="flex items-center justify-center">
			<div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
		</div>
	);
}
