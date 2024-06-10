"use client"
import React, { useState } from 'react';
import Image from "next/image";
import shoe from '@/public/shoeimg.jpg';

interface ProfilePictureProps {
  onChange: (newImage: string) => void;
  style?: React.CSSProperties; // Add style prop
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ onChange, style }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(shoe.src);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result as string;
        setImageSrc(newImage);
        onChange(newImage);
        setIsEditing(false);  
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative h-40 w-40" style={style}> {/* Apply style prop here */}
      <div
        onClick={() => setIsEditing(true)}
        className="h-full w-full bg-blue-200 border border-gray-700 rounded-full hover:cursor-pointer overflow-hidden flex items-center justify-center"
      >
        <Image
          src={imageSrc}
          alt="Profile"
          width={160}
          height={160}
          className="object-cover rounded-full"
        />
      </div>
      {isEditing && (
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ProfilePicture;