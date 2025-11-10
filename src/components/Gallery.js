import React from 'react';

const Gallery = () => {
  const photos = [
    "/photos/Ashutosh.jpg",
    "/photos/C.F.B certificate.jpg",
    "/photos/united confrence.png",
    "/photos/Ashutosh.jpg",
    "/photos/C.F.B certificate.jpg",
    "/photos/united confrence.png"
  ];

  const createFallbackImage = (index) => {
    const canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 280;
    const ctx = canvas.getContext('2d');
    
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(0, 0, 280, 280);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Photo ${index + 1}`, 140, 150);
    
    return canvas.toDataURL();
  };

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2>My Journey</h2>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <img 
              key={index}
              src={photo} 
              alt={`Gallery ${index + 1}`} 
              className="gallery-image"
              onError={(e) => {
                e.target.src = createFallbackImage(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;