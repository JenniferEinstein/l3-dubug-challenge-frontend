import { Box } from '@mui/material';

import bug from '../assets/bug.webp';
import grass from '../assets/grass2.jpg';

function Image() {
  return (
    <Box
      sx={{
        height: '100%',
        padding: 3,
        borderRadius: 2,
        background: `url(${grass})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          zIndex: 1
        }}
      >
        {[...Array(20)].map((_, index) => (
          <path
            key={index}
            d={`M${index * 50} 200 Q${index * 50 + 25} ${100 + Math.random() * 50} ${index * 50 + 50} 200`}
            fill="none"
            stroke="rgba(76, 175, 80, 0.3)"
            strokeWidth="2"
            sx={{
              animation: `sway ${2 + Math.random() * 2}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
              '@keyframes sway': {
                '0%': { transform: 'translateX(-5px)' },
                '100%': { transform: 'translateX(5px)' }
              }
            }}
          />
        ))}
      </Box>

      <Box
        component="img"
        sx={{
          width: '200px',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '50%',
          position: 'absolute',
          zIndex: 2,
          animation: 'moveAndFlip 25s linear infinite',
          '@keyframes moveAndFlip': {
            '0%': {
              left: '0%',
              transform: 'scaleX(-1) rotate(0deg)'
            },
            '40%': {
              left: 'calc(100% - 300px)',
              transform: 'scaleX(-1) rotate(0deg)'
            },
            '45%': {
              left: 'calc(100% - 300px)',
              transform: 'scaleX(-1) rotate(360deg)'
            },
            '50%': {
              left: 'calc(100% - 300px)',
              transform: 'scaleX(1) rotate(0deg)'
            },
            '90%': {
              left: '0%',
              transform: 'scaleX(1) rotate(0deg)'
            },
            '95%': {
              left: '0%',
              transform: 'scaleX(1) rotate(360deg)'
            },
            '100%': {
              left: '0%',
              transform: 'scaleX(-1) rotate(0deg)'
            }
          }
        }}
        alt="Decorative bug illustration"
        src={bug}
      />
    </Box>
  );
}

export default Image;
