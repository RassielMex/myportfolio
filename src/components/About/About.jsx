import { Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import React from "react";
import hello from "../../img/hello.png";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container>
      <Stack alignItems={"center"} marginTop={"2rem"}>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.75, 1, 1],
            x: [-100, 100, 0],
          }}
          transition={{ duration: 2 }}
        >
          <img src={hello} alt="" className="about-img" />
        </motion.div>
      </Stack>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Typography align="center" marginTop={"2rem"} variant="h4">
          ¡Hola! Mi nombre es Rassiel Mex, soy Ingeniero Mecatrónico y
          Desarrollador Web
        </Typography>
        <Typography align="center" marginTop={"2rem"} variant="h6">
          Me fascina la programación y todo lo relacionado a la tecnología.{" "}
          <br />
          Aquí encontrarás algunos de mis proyectos más recientes.
        </Typography>

        <Stack alignItems={"center"} marginTop="2rem">
          <Button
            variant="contained"
            color="warning"
            startIcon={<DownloadIcon />}
          >
            Descargar CV
          </Button>
        </Stack>
      </motion.div>
    </Container>
  );
};

export default About;
