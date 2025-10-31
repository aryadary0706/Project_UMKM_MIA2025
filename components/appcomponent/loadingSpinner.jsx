import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'


export default function LoadingSpinner() {
  return (
    <Tailspin
      size="50"
      stroke="6"
      speed="1.2"
      color="green" 
    />
  );
}