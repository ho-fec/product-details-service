import React from 'react';

import styles from './style.css';

class Basket extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div id={styles.container2}>
          <div id={styles.container3}>
            <a>
              <div id={styles.container4}>
                <div id={styles.container5}>
                  <svg id={styles.svgBasket}>
                    <path d="M23 7.66h-2.84a1 1 0 0 0-.08-.12l-7.15-7a1 1 0 0 0-.15-.25 1.17 1.17 0 0 0-1.55 0 1 1 0 0 0-.15.22l-7.16 7a1 1 0 0 0-.09.13H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-1.98zM12 2.5l5.25 5.16H6.75zM18.78 15.85H5.22a1 1 0 1 0 0 2h13.56a1 1 0 1 0 0-2zM20.87 11.76H3.13a1 1 0 1 0 0 2h17.74a1 1 0 1 0 0-2zM16.7 20H7.3a1 1 0 1 0 0 2h9.4a1 1 0 1 0 0-2z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
