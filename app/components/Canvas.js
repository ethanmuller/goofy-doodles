import React, { useState } from "react";

 const Canvas = ({ showMessage }) => {
   const [value, setValue] = useState("");
   
   const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      showMessage(value);
      setValue("");
    };

   return (
     <div>what happened</div>
   );
 };

 export default Canvas;