import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/add-habit-form";

function App() {
  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
      </Box>
      <AddHabitForm />
    </Container>
  );
}

export default App;
