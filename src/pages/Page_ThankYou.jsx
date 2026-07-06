import React from 'react';

export default function Page_ThankYou() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      <img
        src="/images/thank-you.png"
        alt="Thank You"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}

Page_ThankYou.hideHeader = true;
