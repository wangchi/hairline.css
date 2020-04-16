import React from 'react';
import 'hairline.css';
import './App.css';

function App() {
  return (
    <>
      <div className="box border-default">1px border default</div>

      <div className="box hairline-top">hairline-top</div>

      <div className="box hairline-left">hairline-left</div>

      <div className="box hairline-right">hairline-right</div>

      <div className="box hairline-bottom">hairline-bottom</div>

      <div className="box hairline-round">hairline-round</div>
    </>
  );
}

export default App;
