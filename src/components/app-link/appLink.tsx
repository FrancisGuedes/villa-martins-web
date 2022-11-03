import Link from 'next/link'
import { functionalityAlias } from '../../utils/strings';
import { createClassName } from '../../utils/utility'

interface AppLinkProps {
  href: string,
  onClick?: () => void | undefined,
  rel?: string,
  className?: string | undefined,
  children?: React.ReactNode | undefined,
  target?: string;
}

type LabelAppLink = {
  defaultClassName: string;
}

export default function AppLink({ 
  href, 
  onClick, 
  rel='canonical', 
  className, 
  children,
  target 
}: AppLinkProps) {
  const labelAppLink: LabelAppLink = {...functionalityAlias.component.appLink};
  const classes: string = createClassName(labelAppLink.defaultClassName, className);

  return (
    <Link 
      href={href} 
      rel={rel} 
      className={classes}
      >
        <a 
          onClick={onClick}
          target={target}
          className={`${classes} anchor-link`}
        >
          {children}
        </a>
    </Link>
  )
}