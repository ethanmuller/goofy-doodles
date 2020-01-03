import React, { useState } from "react";

 const Form = ({ showMessage }) => {
   const [value, setValue] = useState("");
   
   const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      showMessage(value);
      setValue("");
    };

   return (
     <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={e => setValue(e.target.value)}
          placeholder="Add a todo"
        />
       {value}
      </form>
   );
 };

 export default Form;