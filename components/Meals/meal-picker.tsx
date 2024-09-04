"use client";
import { useState, useRef } from "react";
import Image from "next/image";
type Props = {};

const MealPicker = (props: Props) => {
  const [image, setImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleImagePickerClick = () => {
    imageRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };
  return (
    <>
      <div
        className="md:h-36 md:w-36 h-28 w-28 border rounded-md flex items-center justify-center cursor-pointer relative"
        onClick={handleImagePickerClick}
      >
        {image ? (
          <Image
            src={image}
            alt="selected image"
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <span className="text-white text-center cursor-pointer">
            Nothing to Preview
          </span>
        )}
      </div>
      <input
        className="hidden"
        type="file"
        accept="image/jpeg, image/png"
        id="image"
        name="image"
        required
        ref={imageRef}
        onChange={handleImageChange}
      />
      ;
    </>
  );
};

export default MealPicker;
