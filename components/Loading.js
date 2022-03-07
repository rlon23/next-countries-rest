import React from 'react';
import styles from './../styles/Loading.module.css';

function Loading(props) {
  return (
    <div className={props.loading ? styles.body_loading : styles.none}>
      <div className={styles.lds_ellipsis}>
        <h3>LOADING...</h3>
      </div>
    </div>
  );
}

export default Loading;
