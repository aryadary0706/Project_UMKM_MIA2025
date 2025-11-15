import { Dot } from "lucide-react";

interface CarouselDotsProps {
  total: number;
  currentIndex: number;
  onDotClick?: (index: number) => void;
}

export default function CarouselDots({ total, currentIndex, onDotClick }: CarouselDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick && onDotClick(index)}
          className={`transition-all duration-200 ${
            currentIndex === index ? "scale-110 opacity-100" : "opacity-40"
          }`}
        >
          <Dot size={currentIndex === index ? 34 : 25} />
        </button>
      ))}
    </div>
  );
}
