import React from 'react';

import styles from './style.css';

class Loves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(event) {
    this.setState({
      hover: this.state.hover ? false : true
    });
  }

  render() {
    return (
      <div id={styles.lovesContainer}>
        <button
          type="button"
          id={styles.lovesButton}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <svg
            viewBox="0 0 32 26"
            id={styles.svgLove}
            style={this.state.hover ? { color: 'rgb(236, 4, 15)' } : {}}
          >
            {this.state.hover ? 
            <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1z"></path> :
            
            <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1zM8 1.988c-2.886 0-6 2.326-6 6.084 0 1.623.63 3.147 1.778 4.294L15 23.587c.533.533 1.463.535 2 0L28.22 12.364C29.368 11.217 30 9.694 30 8.07c0-3.757-3.114-6.083-6-6.083-1.174 0-2.884.31-4.364 1.792l-2.93 2.928c-.39.39-1.022.39-1.413 0l-2.93-2.93C10.884 2.3 9.174 1.99 8 1.99z" />}
          </svg>
          Add to Loves
        </button>
      </div>
    );
  }
}

export default Loves;
