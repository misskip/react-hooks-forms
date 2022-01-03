import React, { useState } from "react";
import Form2 from './Form2';

function Form(props) {
 
  return (
    
    <div>
      <form>
      firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
    </form>
    <Form2 firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default Form;
