interface CardProps {
  title: string;
  children: React.ReactNode;
  imgSrc?: string;
}

export default function Card({ title, children, imgSrc}: CardProps) {
  return (
    <div className="card-content">
      {imgSrc && <img className="image" src={imgSrc} alt="" />}
      <h5>{title}</h5>
      {children}
    </div>
  )
}