interface ImgProps {
  src?: string;
  alt?: string;
}

export function Img({ src, alt=' ' }: ImgProps) {
  return (
    <div className="image">
      {src ? (<img src={src} alt={alt} />) : 
      (<span className="img-alt">{alt}</span>)
      }
    </div>
  );
}