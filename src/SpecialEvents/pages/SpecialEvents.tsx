import React from "react";
import styles from "./SpecialEvents.module.css";
import top100coders from ".././assets/top-100.webp";
import launchpad from "../assets/launchpad.webp";
import trivialideas from "../assets/trivialideas.webp";
import permute from "../assets/permute.webp";
import mutate from "../assets/mutate.webp";
import in50 from "../assets/in50.webp";
import SpecialEventCard from "../Components/SpecialEventCard";
import type { SpecialEvent } from "../Components/SpecialEventCard";
import { Helmet } from "react-helmet";

const SpecialEventsList: SpecialEvent[] = [
  {
    id: 1,
    title: "Top 100 Coders",
    description:
      "Welcome to the Top 100 Coders initiative Recognised by Kerala Govt. We're on a mission to recognize and empower the best coders in India. If you're passionate about coding and want to make a significant impact in the tech community, you're in the right place.",
    link: "https://top100coders.com/",
    image: top100coders,
    isLive: true,
    participants: undefined,
    recurrence: undefined,
    date: undefined,
    time: undefined,
    location: undefined,
    isExpired: undefined,
    isComingSoon: undefined,
    organization: undefined,
    tags: undefined,
  },
  {
    id: 2,
    title: "Launchpad",
    description:
      "Launchpad Kerala 2024 is a premier job fair that brings together talented individuals and innovative companies in the technical and engineering fields.",
    participants: 200,
    link: "https://launchpadkerala.org/",
    image: launchpad,
    isLive: false,
    recurrence: undefined,
    date: undefined,
    time: undefined,
    location: undefined,
    isExpired: undefined,
    isComingSoon: undefined,
    organization: undefined,
    tags: undefined,
  },
  {
    id: 3,
    title: "Trivial Ideas",
    description:
      "Have an idea that's out-of-the-box crazy? This is your chance to turn it into a real product! ",
    recurrence: "Monthly",
    link: "https://www.instagram.com/mulearn.official/p/C6eHEzJyMMn/",
    image: trivialideas,
    isLive: false,
    participants: undefined,
    date: undefined,
    time: undefined,
    location: undefined,
    isExpired: undefined,
    isComingSoon: undefined,
    organization: undefined,
    tags: undefined,
  },
  {
    id: 4,
    title: "Trivial Ideas",
    description:
      "Have an idea that's out-of-the-box crazy? This is your chance to turn it into a real product! ",
    recurrence: "Monthly",
    link: "https://www.instagram.com/mulearn.official/p/C6eHEzJyMMn/",
    image: mutate,
    isLive: false,
    participants: undefined,
    date: undefined,
    time: undefined,
    location: undefined,
    isExpired: undefined,
    isComingSoon: undefined,
    organization: undefined,
    tags: undefined,
  },
  {
    id: 5,
    title: "Permute",
    description:
      "Have an idea that's out-of-the-box crazy? This is your chance to turn it into a real product! ",
    recurrence: "Monthly",
    link: "https://www.instagram.com/p/DHECIMfyela/?igsh=ODE2MjJ0aDBmNnE=",
    image: permute,
    isLive: false,
    participants: undefined,
    date: undefined,
    time: undefined,
    location: undefined,
    isExpired: undefined,
    isComingSoon: undefined,
    organization: undefined,
    tags: undefined,
  },
  {
    id: 6,
    title: "IN50",
    description:
      "IN50 is a special event celebrating innovation and creativity. Join us to explore new ideas and network with industry leaders.",
    recurrence: "Annual",
    link: "https://in50event.com/",
    image: in50,
    isLive: true,
    participants: undefined,
    date: undefined,
    time: undefined,
    location: undefined,
    isExpired: undefined,
    isComingSoon: undefined,
    organization: undefined,
    tags: undefined,
  },
];

const SpecialEvents = () => {
  return (
    <>
      <Helmet>
        <title>Special Events | µLearn</title>
        <meta
          name="description"
          content="Discover exclusive events designed to inspire innovation, enhance skills, and foster meaningful connections across technology, management and creativity."
        />
        <meta property="og:title" content="Special Events | µLearn" />
        <meta
          property="og:url"
          content="https://app.mulearn.org/dashboard/special-events"
        />
        <meta
          property="og:description"
          content="Discover exclusive events designed to inspire innovation, enhance skills, and foster meaningful connections across technology, management and creativity."
        />
      </Helmet>
      <div className={styles.pageContainer}>
        <div className={styles.Banner}>
          <div className={styles.BannerContent}>
            <h1 className={styles.BannerTitle}>Special Events</h1>
            <p className={styles.BannerSubtitle}>
              Discover exclusive events designed to inspire innovation, enhance
              skills, and foster meaningful connections across technology,
              management, and creativity.
            </p>
          </div>
        </div>
        <div className={styles.eventsGrid}>
          {SpecialEventsList.map((specialevent) => (
            <SpecialEventCard
              key={specialevent.id}
              specialevent={specialevent}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecialEvents;

// In your router setup (e.g., in App.tsx or wherever you define routes):
// import TestimonialTop100 from "./SpecialEvents/pages/TestimonialTop100";
// <Route path="/special-events/top100-testimonial" element={<TestimonialTop100 />} />