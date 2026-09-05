import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import useHabitStore from "../store/store";
import { CheckCircle } from "@mui/icons-material";

const HabitList = () => {
  const { habits } = useHabitStore();
  const today = new Date().toISOString().split("T")[0];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid xs={12} sm={6}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  variant="outlined"
                  color={
                    habit.completedDates.includes(today) ? "success" : "primary"
                  }
                  startIcon={<CheckCircle />}
                >
                  {habit.completedDates.includes(today)
                    ? "Completed"
                    : "Mark Complete"}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  remove
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
