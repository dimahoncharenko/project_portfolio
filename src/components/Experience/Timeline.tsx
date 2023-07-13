import { VerticalTimelineElement } from "react-vertical-timeline-component";

import { experiences } from "../../utils/constants";
import {
  TimelineHeadline,
  TimelineCompany,
  ListPoints,
  Icon,
  IconWrapper,
} from "./styled";

type Experience = typeof experiences[number];
type Props = {
  experience: Experience;
};

export const Timeline = ({ experience }: Props) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      contentStyle={{
        background: "hsl(30deg, 50%, 50%)",
      }}
      contentArrowStyle={{
        borderRightWidth: ".5em",
      }}
      iconStyle={{
        objectFit: "contain",
      }}
      icon={
        <IconWrapper>
          <Icon src={experience.icon} alt={experience.company_name} />
        </IconWrapper>
      }
    >
      <div>
        <TimelineHeadline>{experience.title}</TimelineHeadline>
        <TimelineCompany>{experience.company_name}</TimelineCompany>
        <ListPoints>
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ListPoints>
      </div>
    </VerticalTimelineElement>
  );
};
