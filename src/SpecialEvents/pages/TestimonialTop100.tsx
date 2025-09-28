import React from "react";
import { motion } from "framer-motion"; 
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
  <div className={styles.pageContainer} style={{ background: "#fff" }}>
    {/* Event Header */}
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <motion.img
        src={top100coders}
        alt="Top 100 Coders Event"
        style={{ maxWidth: 320, borderRadius: 16 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
      <h1 style={{ margin: "1rem 0", color: "#1f2937" }}>
        {eventDetails.title} - Testimonials
      </h1>
      <p
        style={{
          color: "#374151",
          fontSize: "1.1rem",
          marginBottom: "1rem",
          maxWidth: 700,
          marginInline: "auto",
        }}
      >
        {eventDetails.description}
      </p>
      <div
        style={{
          marginBottom: "1rem",
          color: "#4B5563",
          fontSize: "0.95rem",
        }}
      >
        <strong>Date:</strong> {eventDetails.date} <br />
        <strong>Location:</strong> {eventDetails.location} <br />
        <strong>Organizer:</strong> {eventDetails.organizer} <br />
        <strong>Official Website:</strong>
        <div style={{ marginTop: "0.5rem" }}>
          <a
            href="https://Top100series.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#111827",
              color: "#fff",
              padding: "0.4rem 1rem",
              borderRadius: 9999,
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "all 0.2s ease",
            }}
          >
            Visit Top100series.com ↗
          </a>
        </div>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <strong>Event Highlights:</strong>
        <ul
          style={{
            listStyle: "disc",
            margin: "0.5rem auto",
            paddingLeft: 20,
            color: "#111827",
            textAlign: "left",
            maxWidth: 400,
          }}
        >
          {eventDetails.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
      <p style={{ color: "#374151" }}>
        Hear from our participants, winners, volunteers, and speakers about
        their experience at the Top 100 Coders event.
      </p>
    </div>

    {/* Testimonial Cards */}
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {testimonials.map((t, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "1.5rem",
            maxWidth: 320,
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
        >
          <motion.img
            src={t.avatar}
            alt={t.name}
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              marginBottom: 12,
              objectFit: "cover",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <h3 style={{ margin: "0.5rem 0", color: "#111827" }}>{t.name}</h3>
          <span style={{ fontSize: "0.95rem", color: "#6b7280" }}>
            {t.role} &mdash; <em>{t.achievement}</em>
          </span>
          <div style={{ margin: "0.5rem 0", color: "#f7b500" }}>
            {"★".repeat(t.rating)}
            {"☆".repeat(5 - t.rating)}
          </div>
          <p style={{ marginTop: "1rem", color: "#374151" }}>{t.feedback}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TestimonialTop100;
