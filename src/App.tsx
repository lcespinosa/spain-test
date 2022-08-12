import React from 'react';
import Shell from './components/Shell';

import { YourCartSection, OrderSummarySection } from './components/App';

function App() {
  return (
    <Shell>
      <div className="max-w-[90rem] mx-auto px-3 py-8 flex flex-col">
        <div className="flex flex-row gap-6 w-full">
          <YourCartSection className="flex-1" />
          <OrderSummarySection />
        </div>
      </div>
    </Shell>
  );
}

export default App;
