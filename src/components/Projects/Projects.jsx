import { Container, Grid } from "@mui/material";
import React from "react";

import { motion } from "framer-motion";
import ProjectCard from "../Project/ProjectCard";

const Projects = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: (0.9, 0.9) }}
        animate={{ opacity: 1, scale: (1, 1) }}
        transition={{ duration: 1 }}
      >
        <Grid
          container
          spacing={2}
          marginTop={"4rem"}
          sx={{ justifyContent: { xxs: "center", xs: "center", md: "start" } }}
        >
          <Grid item md={4}>
            <ProjectCard />
          </Grid>
          <Grid item md={4}>
            <ProjectCard />
          </Grid>
          <Grid item md={4}>
            <ProjectCard />
          </Grid>
          <Grid item md={4}>
            <ProjectCard />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
