import React, { useState } from 'react';

function ImageWithFallback({ 
    src, 
    alt, 
    fallbackSrc = 'https://via.placeholder.com/400x400/005F99/FFFFFF?text=Sin+Imagen',
    className,
    ...props 
}) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            console.warn(`⚠️ Error cargando imagen: ${src}`);
            setImgSrc(fallbackSrc);
            setHasError(true);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
            loading="lazy"
            {...props}
        />
    );
}

export default ImageWithFallback;