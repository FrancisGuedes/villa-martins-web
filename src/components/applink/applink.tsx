import Link from 'next/link'

interface AppLinkProps {
  href: string,
  onClick?: () => void,
  label: string,
  rel: string,
  className: string
}

export default function AppLink({ href, onClick, label, rel, className }: AppLinkProps) {

  return (
    <Link 
      href={href} 
      rel={rel} 
      className={className}
      >
        <a onClick={() => onClick?.()}>{label}</a>
    </Link>
  )
}