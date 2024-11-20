import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import { Add as AddIcon } from "@mui/icons-material";

const SongForm = ({ onAddSong }) => {
  const [newSong, setNewSong] = useState({ title: "", artist: "", genre: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAddSong(newSong);
    setNewSong({ title: "", artist: "", genre: "" });
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={1.5}>
            <TextField
              size="small"
              fullWidth
              label="Title"
              variant="outlined"
              value={newSong.title}
              onChange={(e) =>
                setNewSong({ ...newSong, title: e.target.value })
              }
              required
              sx={{ '& .MuiOutlinedInput-root': { height: '40px' } }}
            />
            <TextField
              size="small"
              fullWidth
              label="Artist"
              variant="outlined"
              value={newSong.artist}
              onChange={(e) =>
                setNewSong({ ...newSong, artist: e.target.value })
              }
              required
            />
            <TextField
              size="small"
              fullWidth
              label="Genre"
              variant="outlined"
              value={newSong.genre}
              onChange={(e) =>
                setNewSong({ ...newSong, genre: e.target.value })
              }
              required
            />
            <Button
              type="submit"
              variant="contained"
              startIcon={<AddIcon />}
              size="medium"
              sx={{
                backgroundColor: '#7a19f1',
                '&:hover': {
                  backgroundColor: '#C2185B',
                },
                color: '#FFFFFF',
                fontWeight: 500,
                textTransform: 'none',
                boxShadow: '0 3px 5px rgba(216, 27, 96, 0.3)',
                height: '36px'
              }}
            >
              Add Song
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default SongForm;
