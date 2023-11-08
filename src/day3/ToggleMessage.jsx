import { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <p>Hi! How are You!!!</p>}
    </div>
  );
};

export default ToggleMessage;
