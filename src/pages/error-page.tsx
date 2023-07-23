import {Link} from 'react-router-dom';

import {useState} from 'react';


function ErrorPage () {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const linkStyle = {
    fontSize: '20px',
    cursor: 'pointer',
    textDecoration: isHover ? 'underline' : 'none',
    textUnderlineOffset: '10px'
  };

  return(
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to = "/" className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div style = {{textAlign: 'center', marginTop: '10%', fontSize: '30px'}}>Error: 404. Page not found<br/>
        <Link to = "/" style = {linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>На главную страницу</Link>
      </div>
    </>
  );
}

export {ErrorPage};
