import { useEffect, useState } from 'react';

export const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true once the component has mounted on the client
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return null or a fallback (e.g., loading spinner) during SSR
    return null;
  }

  return <>{children}</>;
};
