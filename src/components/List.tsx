export function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map(i => (
        <li key={i} className="items">{i}</li>
      ))}
    </ul>
  );
}