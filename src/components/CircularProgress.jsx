import React, {useEffect} from 'react';

const CircularProgress = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = React.useState(valueStart);
    useEffect(() => {
      setValue(valueEnd);
    }, [valueEnd]);
  
    return children(value);
  };
  export default CircularProgress;