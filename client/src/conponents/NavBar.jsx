import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["", "", ""];

const NavBar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page, index) => (
              <Button key={page + index} sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>

          {user && (
            <Box>
              <Typography>Hello: {user.username}</Typography>
            </Box>
          )}

          {!user && (
            <>
              <Box sx={{ mr: 2 }}>
                <Button onClick={() => navigate("/register")} sx={{ color: "white", display: "block" }}>
                  <Typography>Register</Typography>
                </Button>
              </Box>
              <Box>
                <Button onClick={() => navigate("/login")} sx={{ color: "white", display: "block" }}>
                  <Typography>Login</Typography>
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
