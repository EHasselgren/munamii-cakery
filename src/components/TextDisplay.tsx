import React from 'react';

interface TextDisplayProps {
  text: string;
  className?: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text, className }) => {
  return (
    <p className={`font-quicksand font-bold text-[#008080] text-center text-4xl leading-relaxed max-w-2xl mx-auto ${className}`}>
      {text}
    </p>
  );
};

export default TextDisplay;
