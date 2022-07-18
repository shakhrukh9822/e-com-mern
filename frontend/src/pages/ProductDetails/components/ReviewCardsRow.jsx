import React from "react";

// components
import { ReviewCard } from "components/ReviewCard";
import { ReviewCardSkeleton } from "components/Skeletons";
import { SliderScrolled } from "components/SliderScrolled";

const ReviewCardsRow = ({ reviews, isLoading }) => {
  return (
    <div>
      <SliderScrolled title={"reviews"}>
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
      </SliderScrolled>
    </div>
  );
};

export default ReviewCardsRow;
