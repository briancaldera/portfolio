export default function Link({ href, className, onClick, children }: { href: string; className?: string; onClick?: () => void; children: React.ReactNode }) {
  return <a href={href} className={className} onClick={onClick}>{children}</a>
}
