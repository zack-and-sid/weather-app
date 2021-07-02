import { useState } from "react";

export default function useAddress() {
  const [currentAddress, setCurrentAddress] = useState("");
  const updateAddress = (address) => {
    setCurrentAddress(address);
  };

  return {
    currentAddress,
    updateAddress,
  };
}
