'use client';

import { useEffect } from 'react';

export default function LinkedInBadge() {
  useEffect(() => {
    // Load the LinkedIn badge script dynamically
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size="large" 
      data-theme="dark" 
      data-type="HORIZONTAL" 
      data-vanity="omjadhav93" 
      data-version="v1"
    >
      <a 
        className="badge-base__link LI-simple-link" 
        href="https://in.linkedin.com/in/omjadhav93?trk=profile-badge"
      >
      </a>
    </div>
  );
} 