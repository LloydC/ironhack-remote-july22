import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom' 
 
function QueryStringExample() {
  const [searchParams] = useSearchParams(); // -> hook used to access query strings
  // Get the values from the URL query strings 
  // Example: http://localhost:3000/example?place=Miami&destType=Hotel
  const place = searchParams.get("place"); // loads query string 'place'
  const destType = searchParams.get("destType"); // loads query string 'destType'
  
  useEffect(() => {
    console.log('place', place)
    console.log('destType', destType);
  }, [place, destType]); // --> dependency array listens in case a change in value happens for 'place' or 'destType'
 
  return (
    <div>
      <h2>Query String Example</h2>
      <p>
        Open the console to see the logged query string values
      </p>
    </div>
  )
}
 
export default QueryStringExample;