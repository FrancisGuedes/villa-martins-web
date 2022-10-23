import { createClassName } from '../../utils/utility';
import { functionalityAlias } from '../../utils/strings';

import './appParagraph.module.scss';

interface AppParagraphProps {
  id?: string | undefined;
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}

type LabelAppParagraph = {
  defaultClassName: string;
  lang: string
}

const AppParagraph = ({
  id,
  className,
  children
}: AppParagraphProps) => {

  const labelAppParagraph: LabelAppParagraph = {...functionalityAlias.component.appParagraph};
  const classes: string = createClassName(labelAppParagraph.defaultClassName, className);

  return (
    <>
      <p
        lang={labelAppParagraph.lang}
        id={id}
        className={classes}
      >
        {children}
      </p>
    </>
  );
}

export default AppParagraph;