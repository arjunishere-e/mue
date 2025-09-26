import React from "react";
import styles from "./SpecialEventCard.module.css";
import { FiCalendar, FiClock, FiX } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  Button,
  Text,
  HStack,
  VStack,
  Icon,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
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
  const { open, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (specialevent.id === 1) {
      navigate("/special-events/top100-testimonial");
    } else {
      onOpen();
    }
  };

  return (
    <>
      {/* Card */}
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

      {/* Modal */}
      <Modal isOpen={open} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent className={styles["modal-content-custom"]}>
          <Box className={styles["modal-image-wrapper"]}>
            <Box
              className={styles["modal-image-bg"]}
              style={{
                backgroundImage: `url(${
                  specialevent.image || "/placeholder.svg"
                })`,
              }}
            />
            <Box className={styles["modal-close-icon"]} onClick={onClose}>
              <Icon as={FiX} w={5} h={5} />
            </Box>
          </Box>
          <ModalBody className={styles["modal-body-custom"]}>
            <VStack align="start" gap={5}>
              <Text color="gray.700" fontSize="md">
                {specialevent.description}
              </Text>
              <VStack align="start" gap={4} w="100%">
                {specialevent.date && (
                  <HStack gap={3}>
                    <Box
                      className={`${styles["icon-circle"]} ${styles["icon-calendar"]}`}
                    >
                      <Icon as={FiCalendar} boxSize={5} />
                    </Box>
                    <Text fontWeight="medium" fontSize="md">
                      {specialevent.date}
                    </Text>
                  </HStack>
                )}
                {specialevent.time && (
                  <HStack gap={3}>
                    <Box
                      className={`${styles["icon-circle"]} ${styles["icon-clock"]}`}
                    >
                      <Icon as={FiClock} boxSize={5} />
                    </Box>
                    <Text fontSize="md">{specialevent.time}</Text>
                  </HStack>
                )}
                {specialevent.location && (
                  <HStack gap={3}>
                    <Box
                      className={`${styles["icon-circle"]} ${styles["icon-location"]}`}
                    >
                      <Icon as={FaMapMarkerAlt} boxSize={5} />
                    </Box>
                    <Text fontSize="md">{specialevent.location}</Text>
                  </HStack>
                )}
              </VStack>
            </VStack>
          </ModalBody>
          <ModalFooter className={styles["modal-footer-custom"]}>
            <Button
              bg="#4285f4"
              color="white"
              fontWeight="600"
              fontSize="1rem"
              borderRadius="0.375rem"
              padding="0.75rem 1.5rem"
              height="50px"
              width="100%"
              _hover={{ backgroundColor: "#3367d6" }}
            >
              Explore More
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SpecialEventCard;
