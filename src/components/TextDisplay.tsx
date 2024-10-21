import React from 'react';

interface TextDisplayProps {
  text: string;     
  className?: string; 
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text, className }) => {
  return (
    <p className={`text-pink-600 font-semibold text-lg ${className}`}>
      {text}
    </p>
  );
};

export default TextDisplay;
