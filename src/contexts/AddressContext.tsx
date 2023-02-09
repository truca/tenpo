import React, { useState, useMemo, useCallback } from 'react';

export interface Coords {
  lat: number
  lng: number
}

export interface AddressContextState {
  maxDistance: number
  setMaxDistance: (coords: number) => void
  coords: Coords | null
  setCoords: (coords: Coords | null) => void
  address: string | null
  setAddress: (address: string | null) => void
  clearFullAddress: () => void
}

export const AddressContext = React.createContext<AddressContextState>({
  maxDistance: 1,
  setMaxDistance: () => {},
  coords: null,
  setCoords: () => {},
  address: null,
  setAddress: () => {},
  clearFullAddress: () => {},
});

interface AddressContextProviderProps {
  children: any
}

function AddressContextProvider({ children }: AddressContextProviderProps) {
  const [maxDistance, setMaxDistance] = useState<number>(1);
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
    maxDistance,
    setMaxDistance,
    coords,
    setCoords,
    address,
    setAddress,
    clearFullAddress,
  }), [maxDistance, setMaxDistance, coords, setCoords, address, setAddress, clearFullAddress]);

  return (
    <AddressContext.Provider value={value}>
      {children}
    </AddressContext.Provider>
  );
}

export default AddressContextProvider;
