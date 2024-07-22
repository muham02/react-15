import React, { useEffect, useRef, useState } from 'react'
import { Flex, Spin, Switch } from 'antd';

const Loading = () => {
    const [auto, setAuto] = React.useState(false);
    const [percent, setPercent] = React.useState(-50);
    const timerRef = React.useRef();
    React.useEffect(() => {
        timerRef.current = setTimeout(() => {
          setPercent((v) => {
            const nextPercent = v + 5;
            return nextPercent > 150 ? -50 : nextPercent;
          });
        }, 100);
        return () => clearTimeout(timerRef.current);
      }, [percent]);
      const mergedPercent = auto ? 'auto' : percent;
  return (
  <div  className='spinner'>
      <div>
      <Flex  align="center" gap="middle">
   
     
   <Spin percent={mergedPercent} size="large" />
 </Flex>
      </div>
  </div>
  )
}

export default Loading