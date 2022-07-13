import React, { useRef } from "react";

// animations
import { motion } from "framer-motion";

// components
import { MainTitle } from "components/Title";
import { ReviewCard } from "components/ReviewCard";
import { ReviewCardSkeleton } from "components/Skeletons";

// icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ReviewCardsRow = ({ reviews, isLoading }) => {
  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <MainTitle title={"Reviews"} extraClasses={"mt-0"} />
        <div className="flex gap-2">
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="w-[30px] h-[30px] border-[1.5px] border-gray-800 flex items-center justify-center text-[20px] rounded-md hover:bg-slate-800 hover:text-white transition-all"
            onClick={() => scroll(-200)}
          >
            <MdKeyboardArrowLeft />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="w-[30px] h-[30px] border-[1.5px] border-gray-800 flex items-center justify-center text-[20px] rounded-md hover:bg-slate-800 hover:text-white transition-all"
            onClick={() => scroll(200)}
          >
            <MdKeyboardArrowRight />
          </motion.button>
        </div>
      </div>

      <div
        ref={ref}
        className="reviews-row w-full flex items-center gap-4 py-4 px-2 transition-all duration-100 ease-linear overflow-x-scroll scrollbar-none"
        style={{ scrollBehavior: "smooth" }}
      >
        {isLoading ? (
          Array(5)
            .fill(5)
            .map((_, index) => <ReviewCardSkeleton key={index} />)
        ) : reviews.length > 0 ? (
          reviews.map((review, reviewIndex) => (
            <ReviewCard review={review} key={reviewIndex} />
          ))
        ) : (
          <div className="my-10 mx-auto">
            <h1 className="text-[34px] capitalize">No Reviews yet...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCardsRow;
