import {Link} from 'react-router-dom';

import {CSSProperties} from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const loading = true;

const color = '#000000';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'grey',
};

function LoadingPage() {

  return (
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

      <div style = {{textAlign: 'center', marginTop: '10%'}}>
        <ScaleLoader
          color={color}
          loading={loading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <div style = {{fontSize: '30px'}}>Loading...</div>
      </div>
    </>
  );
}

export {LoadingPage};
