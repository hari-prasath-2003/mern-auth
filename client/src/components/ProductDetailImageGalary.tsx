import { useState } from "react";

function ProductDetailImageGalary({ images }: { images: string[] }) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-2 overflow-y-scroll">
        {[1, 2, 3, 4, 5].map((_, index) => {
          return images.map((src: string) => {
            return (
              <div
                key={src}
                className={`border-2 ${
                  index == selectedImgIndex ? "border-blue-300" : "border-gray-300"
                } rounded-sm p-2 flex justify-center h-[60px]`}
                onClick={() => setSelectedImgIndex(index)}
              >
                <img src={src} className="object-contain"></img>
              </div>
            );
          });
        })}
      </div>
      <div className="flex justify-center align-middle h-full border-2 border-gray-100 p-5">
        <img src={images[selectedImgIndex]} className="object-contain" alt="product preview image"></img>
      </div>
    </>
  );
}

export default ProductDetailImageGalary;
