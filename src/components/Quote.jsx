import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  CircularProgress,
  Fade,
} from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import baseUrl from "../helpers/baseUrl";

const Quotations = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const fetchRandomQuote = async () => {
    try {
      setLoading(true);
      setShowQuote(false);
      
      const response = await fetch(`${baseUrl}/quote`);
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      
      const data = await response.json();
      setQuote(data);
      setShowQuote(true);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({text: "An error occurred. Please try again.", author:""});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <Box 
      sx={{ 
        height: 'auto',
        minHeight: 'auto',
        padding: 3,
        marginTop: '20px',
        borderRadius: 2,
        background: 'linear-gradient(135deg, #FF61D2 0%, #FE9090 100%)',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(15px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        }
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Random Quote
      </Typography>
      
      <Card 
        elevation={3}
        sx={{
          position: 'relative',
          minHeight: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CardContent>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Fade in={showQuote} timeout={1000}>
              <div>
                <Typography
                  variant="h6"
                  component="p"
                  gutterBottom
                  sx={{ 
                    fontStyle: 'italic',
                    textAlign: 'center',
                    mb: 2 
                  }}
                >
                  "{quote.text}"
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ 
                    textAlign: 'right',
                    fontWeight: 'bold' 
                  }}
                >
                  — {quote.author}
                </Typography>
              </div>
            </Fade>
          )}
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button
          variant="contained"
          onClick={fetchRandomQuote}
          startIcon={<RefreshIcon />}
          disabled={loading}
          sx={{
            backgroundColor: '#FF61D2',
            '&:hover': {
              backgroundColor: '#E451B9',
            },
            color: '#FFFFFF',
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: '0 3px 5px rgba(255, 97, 210, 0.3)',
          }}
        >
          Get New Quote
        </Button>
      </Box>
    </Box>
  );
};

export default Quotations;
