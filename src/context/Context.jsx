import React, { createContext, useState } from 'react';

export const dataContext = createContext();

const Context = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <dataContext.Provider value={[
        open,
        setOpen,

      ]}>
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default Context;