interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function Link({ children, ...props }: LinkProps) {
  return ( 
    <a className="card-link" {...props}>{children}</a>
  );
}