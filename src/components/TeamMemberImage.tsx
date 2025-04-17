'use client'

interface TeamMemberImageProps {
  imageUrl: string;
  onImageClick: (image: string) => void;
}

export default function TeamMemberImage({ imageUrl, onImageClick }: TeamMemberImageProps) {
  return (
    <img
      alt=""
      src={imageUrl}
      className="aspect-[14/13] w-full rounded-2xl object-cover cursor-pointer"
      onClick={() => onImageClick(imageUrl)}
    />
  );
}