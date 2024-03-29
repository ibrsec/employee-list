

import React from 'react'
import contentStyle from './Content.module.scss';

const Content = ({children}) => {
  return (
    <div className={contentStyle.content + " rounded-4"}>
        {children}
    </div>
  )
}

export default Content