"use client";
import React from "react";
//import hello from "../../../public/images/hello.png";
//import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-bg">
      about
      {/* <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack alignItems={"center"}>
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
            <Link
              color={"inherit"}
              target={"_blank"}
              rel="noopener"
              href="https://drive.google.com/file/d/1rwhkpDcYpUukwuTUvGebk8kpt0DeqG3A/view?usp=sharing"
              underline="none"
            >
              <Button
                variant="contained"
                color="warning"
                startIcon={<DownloadIcon />}
              >
                Descargar CV
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </Container> */}
    </div>
  );
};

export default About;
