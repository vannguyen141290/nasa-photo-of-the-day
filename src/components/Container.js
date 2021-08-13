import React from "react";

import '../index.css';
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";

export default function Container() {
    return (
      <>
        <div className='top-content'>
          <TopContent />
          <p>test</p>
        </div>
        <div className='bottom-content'>
          <BottomContent />
        </div>
      </>
    );
  };