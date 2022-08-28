import { Stack } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "@mui/material";

const Contact = () => {
  return (
    <Stack
      justifyContent={"center"}
      spacing={3}
      direction={"row"}
      marginTop={"3rem"}
      marginBottom={"1rem"}
    >
      <Link
        target={"_blank"}
        rel="noopener"
        color={"inherit"}
        sx={{ cursor: "grabbing" }}
        href="https://www.linkedin.com/in/rassielmex/"
      >
        <LinkedInIcon fontSize="large" />
      </Link>
      <Link
        target={"_blank"}
        rel="noopener"
        color={"inherit"}
        sx={{ cursor: "grabbing" }}
        href="https://github.com/RassielMex"
      >
        <GitHubIcon fontSize="large" />
      </Link>
      <Link
        target={"_blank"}
        rel="noopener"
        color={"inherit"}
        sx={{ cursor: "grabbing" }}
        href="https://wa.me/529991111524"
      >
        <WhatsAppIcon fontSize="large" />
      </Link>
    </Stack>
  );
};

export default Contact;
