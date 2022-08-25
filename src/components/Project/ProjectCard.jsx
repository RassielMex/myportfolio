import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import dummy from "../../img/dummy.jpg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { maxWidth } from "@mui/system";

const ProjectCard = () => {
  const [showContent, setShowContent] = useState(false);
  const [leavedCardOnce, setLeavedCardOnce] = useState(false);
  const [timeOutID, setTimeoutID] = useState(0);

  const hideContentDelayed = () => {
    if (!leavedCardOnce && showContent) {
      setLeavedCardOnce(true);
      const _timeOutID = setTimeout(() => {
        setShowContent(false);
      }, 10000);
      setTimeoutID(_timeOutID);
    }
  };

  const hideContent = () => {
    clearTimeout(timeOutID);
    setShowContent(!showContent);
    setLeavedCardOnce(false);
  };
  return (
    <Card
      style={{ height: 400, maxWidth: 400 }}
      onClick={() => {
        hideContent();
      }}
      onMouseLeave={() => {
        hideContentDelayed();
      }}
      onTouchEnd={() => {
        hideContentDelayed();
      }}
    >
      <motion.div
        layout
        style={showContent ? { height: 200 } : { height: 400 }}
      >
        <CardMedia
          component="img"
          image={dummy}
          alt="green iguana"
          className="card-animation"
          height={"100%"}
        />
      </motion.div>
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CardContent sx={{ height: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default ProjectCard;
