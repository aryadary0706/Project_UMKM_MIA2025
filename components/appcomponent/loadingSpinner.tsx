import { Ring2 } from 'ldrs/react'

export default function LoadingSpinner() {
  return (
    <Ring2
      size="40"
      stroke="5"
      strokeLength="0.25"
      bgOpacity="0.1"
      speed="0.8"
      color="black" 
    />
  );
}