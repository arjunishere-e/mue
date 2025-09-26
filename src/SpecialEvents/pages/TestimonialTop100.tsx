import React from "react";
import top100coders from "../assets/top-100.webp";
import avatar1 from "../assets/avatar1.webp";
import avatar2 from "../assets/avatar2.webp";
import avatar3 from "../assets/avatar3.webp";
import avatar4 from "../assets/avatar4.webp";
import styles from "./SpecialEvents.module.css";

const eventDetails = {
  title: "Top 100 Coders",
  description:
    "The Top 100 Coders initiative, recognized by the Kerala Government, is a prestigious event aimed at identifying and celebrating the best coding talent across India. Participants compete in challenging rounds, attend workshops, and network with industry leaders. The event fosters innovation, collaboration, and personal growth for all attendees.",
  date: "June 15-17, 2024",
  location: "Technopark, Trivandrum, Kerala",
  organizer: "μLearn Foundation",
  highlights: [
    "Competitive coding rounds",
    "Expert-led workshops",
    "Networking sessions",
    "Career opportunities",
    "Recognition & awards",
  ],
};

const testimonials = [
  {
    name: "Abhinav Suresh",
    role: "Participant",
    feedback:
      "The Top 100 Coders event was a game-changer for my career. I met amazing people and learned a lot!",
    avatar: avatar1,
    achievement: "Reached Final Round",
    rating: 5,
  },
  {
    name: "Arjun R",
    role: "Winner",
    feedback:
      "Winning at Top 100 Coders gave me confidence and opened new opportunities. The workshops were top-notch!",
    avatar: avatar2,
    achievement: "Winner",
    rating: 5,
  },
  {
    name: "Abhijith R Nair",
    role: "Volunteer",
    feedback:
      "Organizing the event was a fantastic experience. The energy and enthusiasm of the participants were inspiring.",
    avatar: avatar3,
    achievement: "Lead Volunteer",
    rating: 4,
  },
  {
    name: "Arjun",
    role: "Speaker",
    feedback:
      "It was a pleasure to interact with such talented coders. The event was well-organized and impactful.",
    avatar: avatar4,
    achievement: "Guest Speaker",
    rating: 5,
  },
];

const TestimonialTop100: React.FC = () => (
  <div className={styles.pageContainer}>
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <img
        src={top100coders}
        alt="Top 100 Coders Event"
        style={{ maxWidth: 320, borderRadius: 16 }}
      />
      <h1 style={{ margin: "1rem 0", color: "#2563eb" }}>
        {eventDetails.title} - Testimonials
      </h1>
      <p
        style={{
          color: "#111827",
          fontSize: "1.1rem",
          marginBottom: "1rem",
        }}
      >
        {eventDetails.description}
      </p>
      <div
        style={{
          marginBottom: "1rem",
          color: "#4B5563",
        }}
      >
        <strong>Date:</strong> {eventDetails.date} <br />
        <strong>Location:</strong> {eventDetails.location} <br />
        <strong>Organizer:</strong> {eventDetails.organizer}
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <strong>Event Highlights:</strong>
        <ul
          style={{
            listStyle: "disc",
            margin: "0.5rem auto",
            paddingLeft: 20,
            color: "#2563eb",
            textAlign: "left",
            maxWidth: 400,
          }}
        >
          {eventDetails.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
      <p style={{ color: "#111827" }}>
        Hear from our participants, winners, volunteers, and speakers about
        their experience at the Top 100 Coders event.
      </p>
    </div>
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "1.5rem",
            maxWidth: 320,
            textAlign: "center",
          }}
        >
          <img
            src={t.avatar}
            alt={t.name}
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              marginBottom: 12,
              objectFit: "cover",
            }}
          />
          <h3 style={{ margin: "0.5rem 0", color: "#2563eb" }}>{t.name}</h3>
          <span style={{ fontSize: "0.95rem", color: "#4B5563" }}>
            {t.role} &mdash; <em>{t.achievement}</em>
          </span>
          <div style={{ margin: "0.5rem 0", color: "#f7b500" }}>
            {"★".repeat(t.rating)}
            {"☆".repeat(5 - t.rating)}
          </div>
          <p style={{ marginTop: "1rem", color: "#111827" }}>{t.feedback}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TestimonialTop100;
