import './desktopMenu.module.scss';

interface DesktopMenuProps {
  renderNavlinks: JSX.Element[];
}

const DesktopMenu = ({
  renderNavlinks
}: DesktopMenuProps) => {

  return (
    <>
      <nav className='navlink-wrapper'>
        <ul className="navlink-content">
          {renderNavlinks}
        </ul>
      </nav>
    </>
  );
}

export default DesktopMenu;