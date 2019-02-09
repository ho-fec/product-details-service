import React from 'react';

import styles from './style.css';

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img id={styles.image} src={this.props.url} />
      </div>
    );
  }
}

export default ImagePreview;
