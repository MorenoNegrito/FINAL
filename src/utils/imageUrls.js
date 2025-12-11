// src/utils/imageUrls.js - URLs de imágenes optimizadas

// Función helper para URLs de Unsplash
const unsplashUrl = (imageId, width = 400) => {
    return `https://images.unsplash.com/photo-${imageId}?w=${width}&fit=crop&auto=format`;
};

// URLs de imágenes para productos
export const productImages = {
    // ALIMENTOS
    croquetasPerro: unsplashUrl('1587300003388-4f2970d00e2c', 400), // Dog food
    snacksPerro: unsplashUrl('1583511655857-d19b40a7a54e', 400), // Dog treats
    comidaHumeda: unsplashUrl('1615751072497-5f5169febe17', 400), // Wet food
    
    // GATOS
    comidaGato: unsplashUrl('1611003228941-98852ba62227', 400), // Cat food
    snacksGato: unsplashUrl('1548681528-6a5c45b66b42', 400), // Cat treats
    
    // JUGUETES
    juguetePerro: unsplashUrl('1591769225440-811ad7d6eab3', 400), // Dog toy
    jugueteGato: unsplashUrl('1545249390-6bdfa286032f', 400), // Cat toy
    pelota: unsplashUrl('1625316708582-7c38734be31d', 400), // Ball
    
    // ACCESORIOS
    collar: unsplashUrl('1601758228041-5a26d8e1f0fe', 400), // Collar
    correa: unsplashUrl('1568572933382-74d440642117', 400), // Leash
    cama: unsplashUrl('1591088398332-8a7791972843', 400), // Pet bed
    comedero: unsplashUrl('1581349485608-9e8f91db3d15', 400), // Food bowl
    transportadora: unsplashUrl('1551103782-8ab07f3d0b00', 400), // Carrier
    
    // HIGIENE
    champú: unsplashUrl('1616519689464-5b2bc54511f4', 400), // Shampoo
    cepillo: unsplashUrl('1582033788251-2a0a0e3b6a50', 400), // Brush
    areraGato: unsplashUrl('1592194996308-7b43878e84a6', 400), // Litter box
    
    // ROPA
    abrigo: unsplashUrl('1583511655857-d19b40a7a54e', 400), // Pet clothing
    
    // FALLBACK (imagen por defecto si falla)
    default: 'https://via.placeholder.com/400x400/005F99/FFFFFF?text=Producto'
};

// URLs de imágenes para categorías
export const categoryImages = {
    perros: unsplashUrl('1537151608828-ea4eba1d1b66', 600),
    gatos: unsplashUrl('1514888286974-6c03e2ca1dba', 600),
    accesorios: unsplashUrl('1444212477490-ca407925329e', 600),
    alimentos: unsplashUrl('1589924691995-400dc9ecc119', 600),
    juguetes: unsplashUrl('1530281700549-e82e7bf110d6', 600),
    default: 'https://via.placeholder.com/600x400/005F99/FFFFFF?text=Categoría'
};

// Función para obtener imagen con fallback
export const getProductImage = (productType) => {
    return productImages[productType] || productImages.default;
};

export const getCategoryImage = (categoryType) => {
    return categoryImages[categoryType] || categoryImages.default;
};