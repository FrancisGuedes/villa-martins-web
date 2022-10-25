import { functionalityAlias } from '../../utils/strings';
import { createClassName } from '../../utils/utility';
import './appButton.module.scss';

interface AppButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  ariaLabel: string;
  className?: string | undefined;
  disabled?: boolean | undefined;
  rel: string;
  href: string;
  target?: string;
}

type LabelAppButton = {
  defaultClassName: string;
}

const AppButton = ({
  children,
  className,
  onClick,
  type,
  ariaLabel,
  disabled=false,
  rel,
  href,
  target
}: AppButtonProps) => {
  
  const labelAppButton: LabelAppButton = {...functionalityAlias.component.appButton};
  let classes: string = createClassName(labelAppButton.defaultClassName, className);

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <a
        rel={rel}
        href={href}
        target={target}
      >
        {children}
      </a>
    </button>
  );
}

export default AppButton;