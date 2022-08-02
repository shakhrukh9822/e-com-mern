import React from "react";

const Divider = ({ title }) => {
  return (
    <div className="my-4 flex items-center relative w-[100%] before:bg-slate-900 before:w-[100%] before:h-[1px] before:block before:relative before:-top-[2px] before:mr-2 after:bg-slate-900 after:w-[100%] after:h-[1px] after:block after:ml-2 after:relative after:-top-[2px] uppercase">
      {title}
    </div>
  );
};

export default Divider;
