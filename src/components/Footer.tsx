interface FooterProps {
  text: string;
}
export function Footer({ text }: FooterProps) {
  return (<div className="card-footer">{text}</div>);
}