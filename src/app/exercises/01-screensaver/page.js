import React from 'react';

import Link from 'next/link';

function ScreenSaverIndex() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
      	<li>
      		<Link href="01-screensaver/hotpink">Hot Pink</Link>
      	</li>
      	<li>
      		<Link href="01-screensaver/yellow">Yellow</Link>
      	</li>
      	<li>
      		<Link href="01-screensaver/white">White</Link>
      	</li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndex;
