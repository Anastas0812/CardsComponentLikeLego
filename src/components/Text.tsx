interface TextBlockProps {
  text: string;
}

export function TextBlock({ text }: TextBlockProps) {
  return (<div className="text-block">{text}</div>);
}