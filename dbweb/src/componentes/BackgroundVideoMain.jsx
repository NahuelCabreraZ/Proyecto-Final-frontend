import React, { useState } from 'react';

const BackgroundVideoMain = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      {error && <p>Error al cargar el video</p>}
      <video autoPlay muted loop id="bg-video" onError={() => setError(true)}>
        <source src="/video/backgroundmain.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
export default BackgroundVideoMain;