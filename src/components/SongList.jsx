import React from "react";
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const SongList = ({ songs, onDeleteSong }) => {
  return (
    <Card sx={{ 
      height: 'calc(100vh - 350px)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ 
        flexGrow: 1,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '8px'
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555'
        }
      }}>
        <List>
          {[...songs].reverse().map((song) => (
            <ListItem
              key={song.id}
              divider
              sx={{
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDeleteSong(song.id)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={song.title}
                secondary={`${song.artist} • ${song.genre}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
};

export default SongList;
