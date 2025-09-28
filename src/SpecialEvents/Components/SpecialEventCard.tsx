import React from "react";
import styles from "./SpecialEventCard.module.css";
import { useNavigate } from "react-router-dom";

export interface SpecialEvent {
  id: number;
  title: string;
  description: string;
  date?: string;
  recurrence?: string;
  participants?: number;
  image: string;
  link: string;
  isLive: boolean;
  isExpired?: boolean | null;
  isComingSoon?: boolean | null;
  organization?: string;
  tags?: string[];
  location?: string;
  time?: string;
}

const SpecialEventCard: React.FC<{ specialevent: SpecialEvent }> = ({
  specialevent,
}) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    switch (specialevent.id) {
      case 1:
        navigate("/special-events/top100-testimonial");
        break;
      case 2:
        navigate("/special-events/launchpad-testimonial");
        break;
      case 3:
        navigate("/special-events/trivialideas-testimonial");
        break;
      case 4:
        navigate("/special-events/mutate-testimonial");
        break;
      case 5:
        navigate("/special-events/permute-testimonial");
        break;
      case 6:
        navigate("/special-events/in50-testimonial");
        break;
      default:
        window.open(specialevent.link, "_blank");
    }
  };

  return (
    <div className={styles.card}>
      <img
        src={specialevent.image || "/placeholder.svg"}
        alt={specialevent.title}
        className={styles.image}
      />
      <div className={styles.content}>
        <button className={styles.readMoreButton} onClick={handleReadMore}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default SpecialEventCard;
