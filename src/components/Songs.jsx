import React, { useState, useLayoutEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import baseUrl from "../helpers/baseUrl";
import SongForm from "./SongForm";
import SongList from "./SongList";


const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = `${baseUrl}/songs`;

  const fetchSongs = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch songs");
      const data = await response.json();
      setSongs(data);
    } catch(error) {
      console.error("Error fetching songs:", error);
    }
      finally {
      setIsLoading(false);
    }
  };

  const addSong = async (newSong) => {
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
    fetchSongs();
  };

  const deleteSong = async (id) => {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    fetchSongs();
  };

  useLayoutEffect(() => {
    fetchSongs();
  }, []);

  return (
    <Box 
      sx={{ 
        height: 'calc(100vh - 25px)',
        padding: 2,
        marginBlock: '20px',
        borderRadius: 2,
        background: 'linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)',
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        transition: 'all 0.3s ease-in-out, opacity 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
        },
        opacity: isLoading ? 0 : 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        Song Tracker
      </Typography>
      <SongForm onAddSong={addSong} />
      <SongList songs={songs} onDeleteSong={deleteSong} />
    </Box>    
  );
};

export default Songs;