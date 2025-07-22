import { AiOutlineClose } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useOverlayStore, useProductImageStore } from "../store/store";

const LeftSection = ({ carousel = false }) => {
  const {
    images,
    selectedImage,
    changeImage,
    nextImage,
    prevImage,
    nextDisabled,
    prevDisabled,
  } = useProductImageStore();
  const { changeOverlay } = useOverlayStore();

  const ChevronLeft = () => (
    <BsChevronLeft
      className={
        "cursor-pointer hover:text-orange transition-all duration-200" +
        (prevDisabled ? " opacity-50 pointer-events-none" : "")
      }
      onClick={prevImage}
    />
  );

  const ChevronRight = () => (
    <BsChevronRight
      className={
        "cursor-pointer hover:text-orange transition-all duration-200" +
        (nextDisabled ? " opacity-50 pointer-events-none" : "")
      }
      onClick={nextImage}
    />
  );

  return (
    <div className="flex w-full h-full justify-center items-center flex-col mt-0 sm:mt-5 md:mt-0">
      {carousel && (
        <div className="w-[80%] mb-5">
          <AiOutlineClose
            className="text-white text-2xl ml-auto cursor-pointer hover:text-orange transition-all duration-200 "
            onClick={() => changeOverlay(false)}
          />
        </div>
      )}
      <div className="w-full sm:w-[60%] md:w-[80%] relative">
        <img
          src={selectedImage}
          className=" sm:rounded-2xl w-full h-80 sm:h-auto cursor-pointer"
          onClick={() => {
            if (window.innerWidth >= 640) changeOverlay(true);
          }}
        />
        <span className="bg-white  sm:hidden  absolute left-5 top-1/2 text-2xl -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full">
          <ChevronLeft />
        </span>
        <span className="bg-white sm:hidden  absolute right-5 top-1/2 text-2xl  -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full">
          <ChevronRight />
        </span>

        {carousel && (
          <>
            <span className="bg-white  absolute left-0 top-1/2 text-2xl -translate-x-7 -translate-y-1/2 w-14 h-14 flex justify-center items-center rounded-full">
              <ChevronLeft />
            </span>
            <span className="bg-white  absolute right-0 top-1/2 text-2xl translate-x-7  -translate-y-1/2 w-14 h-14 flex justify-center items-center rounded-full">
              <ChevronRight />
            </span>
          </>
        )}
      </div>
      <div
        className={
          "sm:w-[60%] md:w-[80%] mt-7 hidden sm:flex" +
          (carousel ? " gap-7 justify-center mt-10" : " justify-between")
        }
      >
        {images.map((item) => (
          <div
            key={item.id}
            className={`relative group w-24 h-24 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
              item.selected ? "ring-2 ring-orange" : ""
            }`}
            onClick={() => changeImage(item.id)}
          >
            <img src={item.image} className="w-full h-full object-cover" />

            <div
              className={`absolute inset-0 z-10 pointer-events-none transition-all duration-200 ${
                item.selected ? "bg-white/50" : "group-hover:bg-white/50"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
