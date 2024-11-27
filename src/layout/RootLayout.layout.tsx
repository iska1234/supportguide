
import React, { PropsWithChildren } from "react";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>

      <div className={`flex bg-white `}>
        <div
          className={`flex flex-col flex-1 overflow-y-hidden overflow-x-auto `}
        >
          {children}
        </div>
      </div>


    </>
  );
};

export default React.memo(RootLayout);
