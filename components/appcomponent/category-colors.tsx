type ColorClasses = {
	bg: string;
	text: string;
};

type CategoryKey =
	| "kuliner"
	| "retail"
	| "jasa"
	| "fashion"
	| "elektronik"
	| "lainnya"
	| "default";

export const categoryColorMap: Record<CategoryKey, ColorClasses> = {
	kuliner: { bg: "bg-red-500/80", text: "text-white" },
	retail: { bg: "bg-blue-500/80", text: "text-white" },
	jasa: { bg: "bg-purple-500/80", text: "text-white" },
	fashion: { bg: "bg-pink-500/80", text: "text-white" },
	elektronik: { bg: "bg-indigo-500/80", text: "text-white" },
	lainnya: { bg: "bg-gray-500/80", text: "text-white" },
	default: { bg: "bg-gray-500/80", text: "text-white" },
};

export function getCategoryColor(category: string): ColorClasses {
	const normalizedCategory = (category || "").toLowerCase();
	if (
		Object.prototype.hasOwnProperty.call(
			categoryColorMap,
			normalizedCategory
		)
	) {
		return categoryColorMap[normalizedCategory as CategoryKey];
	}
	return categoryColorMap.default;
}

export type { ColorClasses, CategoryKey };
