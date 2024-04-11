// Title.js
import  { useEffect } from 'react';

const Title = ({ title }) => {
  const stringWithSpaces = title.replace(/-/g, ' ');
  const capitalizedString = stringWithSpaces
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  useEffect(() => {
    document.title = capitalizedString + " | Election Commission of India";
  }, [capitalizedString]);

  return null; // This component doesn't render anything to the DOM
};

export default Title;
