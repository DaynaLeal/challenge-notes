import React from 'react'

/* 
By importing this `module`, the styles and class names will only be scoped to this component.
This means that if you want to have a `header` class that only applies to this header component, 
you can do so here. 

Each css selector will be attached to the object `styles`. So i have a class header, 
which I can then use as the class name here on the div. Even if other elements outside this have 
the header class, this header's styles wont be applied to them. 

Look at the class name in the inspector.
*/
import styles from './header.module.sass'

const Header = () => {
  return <div className={styles.header} />
}

export default Header
