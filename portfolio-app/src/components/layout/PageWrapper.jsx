import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="screen-wrapper min-h-screen bg-[#dfe3e8] px-4 py-8 print:bg-white print:p-0">
      <div className="screen-card mx-auto w-[210mm] max-w-full overflow-hidden bg-white shadow-[0_18px_60px_rgba(15,23,42,0.10)] print:w-full print:max-w-none print:shadow-none">
        {children}
      </div>
    </div>
  );
}
