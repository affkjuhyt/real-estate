'use client'

interface ImageModalProps {
  image: string | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-2xl w-full">
        <img
          src={image}
          alt="Team member"
          className="w-full h-auto rounded-lg shadow-xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          className="absolute -top-2 -right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}