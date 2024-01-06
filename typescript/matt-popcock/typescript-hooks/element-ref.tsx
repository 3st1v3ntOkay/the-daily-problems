import { useRef, ElementRef } from 'react';

const RefComponent = () => {
  const  audioRef = useRef<ElementRef<"audio">>(null);

  return <audio ref={audioRef}>Hellouw</audio>
}