import React, { useState } from "react";

const useModal = (): [boolean, () => void] => {
  const [modal, setmodal] = useState(false);
  const setModal = () => {
    if (modal == true) {
      setmodal(false);
    } else {
      setmodal(true);
    }
  };
  return [modal, setModal];
};

export default useModal;
