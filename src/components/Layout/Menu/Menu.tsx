import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../../data';

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((lItem) => (
            <Link to={lItem.url} className="listItem" key={lItem.id}>
              <img src={lItem.icon} alt={lItem.title} />
              <span className="listItemTitle">{lItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
