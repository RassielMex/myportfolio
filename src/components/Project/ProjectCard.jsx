import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkIcon from "@mui/icons-material/Link";
import WebAssetIcon from "@mui/icons-material/WebAsset";

const ProjectCard = ({ project }) => {
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
      style={{ height: 425, maxWidth: 425 }}
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
        style={showContent ? { height: 200 } : { height: 425 }}
      >
        <CardMedia
          component="img"
          image={project?.screenshot}
          alt="green iguana"
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
            <CardContent sx={{ height: 225 }}>
              <Stack height={"100%"} justifyContent="space-between">
                <Typography gutterBottom variant="h5" component="div">
                  {project?.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom={"1rem"}
                >
                  {project?.description}
                </Typography>
                {project?.accounts && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    marginBottom={"1rem"}
                  >
                    {project?.accounts}
                  </Typography>
                )}
                <Stack direction={"row"}>
                  <Link
                    href={project?.live}
                    target={"_blank"}
                    rel="noopener"
                    underline="none"
                    sx={{ cursor: "grabbing" }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ marginRight: "0.5rem" }}
                      startIcon={<LinkIcon />}
                    >
                      Ir al sitio
                    </Button>
                  </Link>
                  <Link
                    href={project?.repo}
                    target={"_blank"}
                    rel="noopener"
                    underline="none"
                    sx={{ cursor: "grabbing" }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ marginRight: "0.5rem" }}
                      startIcon={<WebAssetIcon />}
                    >
                      Github Repo
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default ProjectCard;
