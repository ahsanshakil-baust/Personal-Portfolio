import React from "react";

interface ImageProps {
    src: string;
}

const ImageComponent: React.FC<ImageProps> = ({ src }) => {
    return (
        <div className="w-[200px] h-[200px]">
            <img src={src} alt="no-image" />
        </div>
    );
};

export default ImageComponent;
