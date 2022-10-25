import './utilities.module.scss';

interface UtilitiesProps {
  title: string;
  utilities: string[];
}

const Utilities = ({
  title,
  utilities
}: UtilitiesProps) => {
  // Utilities items
  const renderUtilitiesItems: JSX.Element[] = utilities.map((
    utility: string, 
    index: number) => {
      return (
        <div key={index}> 
          <li className="utilities-item">
            {utility}
          </li>
        </div>
      )
  })

  return (
    <>
      <div className="utilities-container">
        <h4>
          {title}
        </h4>
        <ul className="utilities-list">
          {renderUtilitiesItems}
        </ul>
      </div>
    </>
  );
}

export default Utilities;