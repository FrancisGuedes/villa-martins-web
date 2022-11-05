import AppLink from '../app-link/appLink';
import SocialMedia, { LabelSocialMedia } from '../social-media/socialMedia';
import { ContactModule } from '../../lib/interfaces/contentful/icontact';
import { functionalityAlias, strings } from '../../utils/strings';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './modal.module.scss';
import { createClassName } from '../../utils/utility';
import { useState, useEffect } from 'react';

interface ModalProps {
  children?: React.ReactNode | React.ReactNode[] | undefined;
  socialMediaProps?: ContactModule.ISocialMediaLinks[] | undefined;
  isModalBakgroundActive: boolean;
  isSocialMediaActive: boolean;
  handleModal: () => void;
  classNameSocialMedia: LabelSocialMedia;
  id?: string | undefined;
}

type LabelModalSocial = {
  title: string;
}

type LabelModal = {
  id: string;
}

const Modal = ({
  children,
  socialMediaProps,
  isModalBakgroundActive,
  isSocialMediaActive,
  handleModal,
  classNameSocialMedia,
  id,
}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const labelModalSocial: LabelModalSocial = {...strings.component.modal.social}
  const labelModal: LabelModal = {...functionalityAlias.component.modal};
  const modalID: string = createClassName(labelModal.id, id);

  function handleIsModalOpen() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    console.log("Activity mounted at ", new Date())
    // waiting for handleIsModalOpen to make the css effect 
    // before sending the new state - false - to navbar after closing modal
    if(!isModalOpen) {
        setTimeout(() => {
          handleModal();
      }, 700)
    }
  }, [isModalOpen])

  return (
    <>
      { isModalBakgroundActive 
        ? 
          <span 
            className={`modal-background ${isModalOpen ? '' : 'modal-bg-close-effect'}`}
            onClick={() => {
              handleIsModalOpen();
            }}
          />
        : 
          null
      }
      <div 
        className={`${modalID} ${isModalOpen ? '' : 'modal-close-effect'}`}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          // the modal it will not close if anything inside it's content is clicked
          event.stopPropagation();
        }}>

          {children}

        { isSocialMediaActive 
          ?
            <div className="contact-social">
              <h3>
                {labelModalSocial.title}
              </h3>
              <div className="social-list">
                <SocialMedia 
                  socialMediaProps={socialMediaProps!} 
                  isTitleOfContactActive={false} 
                  isSvgActive 
                  isDescriptionSvgActive={false}
                  className={classNameSocialMedia}
                />
              </div>
            </div>
          :
            null
        }
        <AppLink 
          href='#contact' 
          onClick={() => {
            handleIsModalOpen();
          }}
          className='modal-close'
        >
          <FontAwesomeIcon 
            icon={faTimes} 
            className='icon-close-modal'
          />
        </AppLink>
      </div>
    </>
  );
}

export default Modal;