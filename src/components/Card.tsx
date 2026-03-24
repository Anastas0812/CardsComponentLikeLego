interface CardProps {
  title: string;
  children: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
}

export default function Card({ title, children, imgSrc, imgAlt}: CardProps) {
  return (
    <div className="card-content">
      {imgSrc && (
        <div className="image">
          <img src={imgSrc} alt={imgAlt} />
        </div>  
      )}
      <h5>{title}</h5>
      {children}
    </div>
  )
}