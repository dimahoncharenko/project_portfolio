import type { testimonials } from "../../utils/constants";

import {
  CardWrapper,
  Quote,
  Comment,
  OwnerBox,
  OwnerAvatar,
  At,
  OwnerCompany,
} from "./styled";

type Props = {
  feedback: typeof testimonials[number];
};

export const Card = ({ feedback }: Props) => {
  return (
    <CardWrapper>
      <Quote>"</Quote>
      <Comment>{feedback.testimonial}</Comment>
      <OwnerBox>
        <div>
          <At>@</At>
          {feedback.name}
          <OwnerCompany>{feedback.company}</OwnerCompany>
        </div>
        <OwnerAvatar
          src={feedback.image}
          alt={`feedback owner - ${feedback.name}`}
        />
      </OwnerBox>
    </CardWrapper>
  );
};
