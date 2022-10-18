import Link from 'next/link'
import { functionalityAlias } from '../../utils/strings';
import { createClassName } from '../../utils/utility'

interface AppLinkProps {
  href: string,
  onClick?: () => void | undefined,
  label: string,
  rel: string,
  className?: string | undefined,
  children?: React.ReactNode | undefined,
}

type LabelAppLink = {
  defaultClassName: string;
}

export default function AppLink({ href, onClick, label, rel, className, children }: AppLinkProps) {
  const labelAppLink: LabelAppLink = {...functionalityAlias.component.appLink};
  const classes: string = createClassName(labelAppLink.defaultClassName, className);

  return (
    <Link 
      href={href} 
      rel={rel} 
      className={classes}
      >
        <a onClick={() => onClick?.()}>{label}</a>
    </Link>
  )
}