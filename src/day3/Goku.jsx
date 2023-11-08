import { useState } from "react";

const Goku = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>
        {isVisible ? "Kaioken" : "SuperSaiyan"}
      </button>
    </div>
  );
};

export default Goku;
