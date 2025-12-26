import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import LeagueOfLegends from '~/assets/league-of-legends.svg?react'
import CloseIcon from '@mui/icons-material/Close'
import MenuNavLinks from './MenuNavLinks'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function MenuDrawer() {
  const [open, setOpen] = useState(false)
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen)
  }
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Box
        sx={{
          bgcolor: '#8080804d',
          p: 0.5,
          borderRadius: '10px'
        }}
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon sx={{ color: 'white' }} />
      </Box>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ height: '100vh', width: '484px', bgcolor: '#1f1f1f' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <LeagueOfLegends />
            <Box sx={{ bgcolor: '#80808033', p: 0.5, borderRadius: '10px' }} onClick={() => toggleDrawer(false)}>
              <CloseIcon sx={{ color: 'white', cursor: 'pointer' }}/>
            </Box>
          </Box>
          <Box sx={{ p: '4px 16px 0' }}>
            <Box sx={{
              bgcolor: '#8080804d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              p: '5px'
            }}>
              <SearchIcon sx={{ color: 'white' }} />
              <TextField 
                id="input-with-sx"
                variant="standard"
                sx={{
                  color: 'white',
                  '& input': { color: 'white' },
                  '& .MuiInput-root::after': { display: 'none' },
                  '& .MuiInput-root::before': { display: 'none' },
                  '&:hover .MuiInput-root::before': { display: 'none' },
                  ml: 2,
                  width: '100%'
                }}
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <CloseIcon
                sx={{ color: 'white', cursor: 'pointer' }}
                onClick={() => setSearchValue('')}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <MenuNavLinks />
          </Box>
          <Box sx={{
            p: 2,
            m: '20px 0 0'
          }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#0bc4e2',
                fontWeight: 'bold',
                color: 'black',
                borderRadius: '10px',
                transition: '0.2s ease-in-out',
                '&:hover': {
                  bgcolor: '#00b2cf',
                },
                width: '100%',
                p: '8px 16px',
                m: '12px 0 0'
              }}
            >
              Chơi ngay
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default MenuDrawer
