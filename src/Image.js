export default function Image({ src, ...rest }) {
    // Ensure src uses forward slashes and does not duplicate 'Uploads'
    const cleanedSrc = src.replace(/\\/g, '/').replace(/^Uploads\//, '');
    const fullSrc = cleanedSrc.startsWith('https://') || cleanedSrc.startsWith('http://')
        ? cleanedSrc
        : `http://localhost:4000/Uploads/${cleanedSrc}`;

    return (
        <img 
            {...rest} 
            src={fullSrc} 
            alt="" 
            className="object-cover w-full h-30 rounded-md mx-2"
            onError={(e) => { 
                // Handle image load error, e.g., show a placeholder image
                e.target.src = 'http://via.placeholder.com/150'; 
            }}
        />
    );
}


