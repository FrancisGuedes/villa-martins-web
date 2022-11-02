import { IFooterFields } from '../../../@types/generated/contentful';
import AppButton from '../../components/app-button/appButton';
import AppLink from '../../components/app-link/appLink';
import { FooterModule } from '../../lib/interfaces/contentful/ifooter';
import './footer.module.scss';

interface FooterProps {
  footerSectionProps: IFooterFields[];
}

const Footer = ({
  footerSectionProps
}: FooterProps) => {
  const footerData: FooterModule.IFooter = new Map(Object.entries(footerSectionProps))
  .values()
  .next()
  .value;

  const craftedFields: FooterModule.IFields = footerData.craftedPersonContainerLink.fields;

  console.log("footerSectionProps: ", footerData);

  return (
    <>
      <footer id="footer" className='footer-wrapper'>
        <div className="footer-container">
          <label className="label-description">
            &copy;&nbsp;{footerData.description}
          </label>
          <div className="crafted-description">
            <div className="crafted-by">
              <AppLink
                className='crafted-link'
                rel={craftedFields.rel} 
                href={craftedFields.href}
              >
                {footerData.craftedTitle}&nbsp;{footerData.craftedPersonName}&nbsp;&#9829;
              </AppLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;