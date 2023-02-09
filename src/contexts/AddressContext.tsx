import React, { useState, useMemo, useCallback } from 'react';

export interface Coords {
  lat: number
  lng: number
}

export interface AddressContextState {
  coords: Coords | null
  setCoords: (coords: Coords | null) => void
  address: string | null
  setAddress: (address: string | null) => void
  clearFullAddress: () => void
}

export const AddressContext = React.createContext<AddressContextState | null>(null);

interface AddressContextProviderProps {
  children: any
}

function AddressContextProvider({ children }: AddressContextProviderProps) {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const clearFullAddress = useCallback(
    () => {
      setCoords(null);
      setAddress(null);
    },
    [setCoords, setAddress],
  );

  const value = useMemo(() => ({
    coords,
    setCoords,
    address,
    setAddress,
    clearFullAddress,
  }), [coords, setCoords, address, setAddress, clearFullAddress]);

  return (
    <AddressContext.Provider value={value}>
      {children}
    </AddressContext.Provider>
  );
}

export default AddressContextProvider;
