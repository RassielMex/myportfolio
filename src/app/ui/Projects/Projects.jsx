import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Project/ProjectCard";
import projects from "../../data";
import Contact from "../Contact/Contact";

const Projects = () => {
  return (
    <Container sx={{ marginTop: "4rem" }}>
      <motion.div
        initial={{ opacity: 0, scale: (0.9, 0.9) }}
        animate={{ opacity: 1, scale: (1, 1) }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Proyectos
        </Typography>
        <Grid
          container
          spacing={2}
          marginTop={"1rem"}
          sx={{ justifyContent: { xxs: "center", xs: "center", md: "start" } }}
        >
          {projects.map((prj, index) => {
            return (
              <Grid item md={4} key={index}>
                <ProjectCard project={prj} />
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
      <Contact />
    </Container>
  );
};

export default Projects;
