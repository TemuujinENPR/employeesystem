import React from "react"

import styles from './header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className='container'>
          <h3>Ажилтан бүртгэх систем</h3>
        </div>
      </div>
    </>
  )
}

export default Header