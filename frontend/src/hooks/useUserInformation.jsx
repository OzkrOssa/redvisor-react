import {useEffect, useState } from 'react'
import { CheckActiveUser } from '../../wailsjs/go/main/App';

function useUserInformation(hit){
    
    const [userInformation, setUserInformation] = useState(null);
    const [loading, setLoading] =  useState(true)

    useEffect(() => {
        setLoading(true);
        const fetchUserInformation = async () => {
          try {
            const user = await CheckActiveUser(String(hit.name), String(hit.host));
            setUserInformation(user);
          } catch (error) {
            console.error("Error fetching user information:", error);
          } finally {
            setLoading(false);
          }
        };
        fetchUserInformation();
      }, []);
    
      return {userInformation, loading}
}

export default useUserInformation