import React from "react";
import { motion } from "framer-motion";
import launchpad from "../assets/launchpad.webp";
import avatar1 from "../assets/avatar1.webp";
import avatar2 from "../assets/avatar2.webp";
import styles from "./SpecialEvents.module.css";

const eventDetails = {
  title: "Launchpad Kerala",
  description:
    "Launchpad Kerala 2024 is a premier job fair that brings together talented individuals and innovative companies in the technical and engineering fields.",
  date: "March 10, 2024",
  location: "Kochi, Kerala",
  organizer: "μLearn Foundation",
  highlights: [
    "Job opportunities",
    "Industry networking",
    "Skill workshops",
    "Resume reviews",
    "Career guidance",
  ],
};

const testimonials = [
  {
    name: "Riya Thomas",
    role: "Attendee",
    feedback:
      "I got my first job through Launchpad! The networking sessions were very helpful.",
    avatar: avatar1,
    achievement: "Placed at TechCorp",
    rating: 5,
  },
  {
    name: "Vishnu S",
    role: "Recruiter",
    feedback:
      "We found great talent at Launchpad. The event was well-organized and efficient.",
    avatar: avatar2,
    achievement: "HR Manager",
    rating: 4,
  },
];

const TestimonialLaunchpad: React.FC = () => (
  <div className={styles.pageContainer} style={{ background: "#fff" }}>
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <motion.img
        src={launchpad}
        alt="Launchpad Event"
        style={{ maxWidth: 320, borderRadius: 16 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
      <h1 style={{ margin: "1rem 0", color: "#2563eb" }}>
        {eventDetails.title} - Testimonials
      </h1>
      <p style={{ color: "#111827", fontSize: "1.1rem", marginBottom: "1rem" }}>
        {eventDetails.description}
      </p>
      <div style={{ marginBottom: "1rem", color: "#4B5563" }}>
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
        Hear from our attendees and recruiters about their experience at
        Launchpad Kerala.
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
          <h3 style={{ margin: "0.5rem 0", color: "#2563eb" }}>{t.name}</h3>
          <span style={{ fontSize: "0.95rem", color: "#4B5563" }}>
            {t.role} &mdash; <em>{t.achievement}</em>
          </span>
          <div style={{ margin: "0.5rem 0", color: "#f7b500" }}>
            {"★".repeat(t.rating)}
            {"☆".repeat(5 - t.rating)}
          </div>
          <p style={{ marginTop: "1rem", color: "#111827" }}>{t.feedback}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TestimonialLaunchpad;
