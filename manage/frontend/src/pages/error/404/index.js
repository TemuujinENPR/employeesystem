import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

import styles from './error404.module.css'

const Error404 = () => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <Result
          style={{marginTop: '80px'}}
          status="404"
          title="404"
          subTitle="Уучлаарай, энэ хуудас олдсонгүй."
          extra={<Button type="primary"><Link to="/">Буцах</Link></Button>}
        />
      </div>
    </div>
  );
};

export default Error404