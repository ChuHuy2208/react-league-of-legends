import TopDrawer from "~/components/Drawer"
import NavLinks from '~/components/NavLinks'
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

function Header() {

  const [searchValue, setsearchValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  // Khi tắt sẽ xoá giá trị và ấn phần search đi
  const closeSearch = () => {
    setIsOpen(false)
    setsearchValue('')
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const ITEM_HEIGHT = 360

  const language = [
    'English (NA)',
    'English (EUW)',
    'Deutsch',
    'Español (EUW)',
    'Français',
    'Italiano',
    'Polski',
    'Ελληνικά',
    'Română',
    'Magyar',
    'Čeština',
    'Español (LATAM)',
    'Português',
    '日本語',
    'Русский',
    'Türkçe',
    'English (OCE)',
    '한국어',
    'English (SG)',
    'English (PH)',
    'Tiếng Việt',
    'ภาษาไทย',
    '繁體中文',
    'العربية'
  ]
 
  return (
    <Box 
      sx={{
        bgcolor: '#111',
        width: '100%',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        px: 2,
        overflowX: 'auto',
        overflowY: 'hidden'
      }}
    >
      <TopDrawer />

      <Box sx={{ display: 'flex', flex: 1 }}>
        <NavLinks />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isOpen ? '320px' : 'auto',
          gap: 2
        }}
      >
        <Box
          sx={{
            p: 0.5,
            bgcolor: '#2b2a29',
            borderRadius: '10px',
            display: isOpen ? 'none' : 'block'
          }}
        >
          <SearchIcon
            sx={{ color: 'white', cursor: 'pointer' }}
            onClick={() => setIsOpen(true)}
          />
        </Box>
        {/* Chỉ hiện search khi nhận thuộc tính isOpen */}
        {isOpen && (
          <Box 
            sx={{
              display: 'flex',
              color: 'white',
              alignItems: 'center',
              bgcolor: '#2b2a29',
              px: 1,
              py: 0.5,
              borderRadius: '10px'
            }}
          >
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
                ml: 2
              }}
              onChange={(e) => setsearchValue(e.target.value)}
              value={searchValue}
            />
            <CloseIcon
              sx={{ color: 'white', cursor: 'pointer' }}
              onClick={closeSearch}
            />
          </Box>
        )}

        <Box
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <LanguageIcon sx={{ color: 'white' }}/>
        </Box>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT,
                width: '20ch',
              },
            },
          }}
        >
          {language.map((option) => (
            <MenuItem key={option} selected={option === 'Tiếng Việt'} onClick={handleClose} sx={{ color: '#999999', fontSize: '12px', p: '10px 0 10px 20px' }}>
              {option}
            </MenuItem>
          ))}
        </Menu>

        <Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#0bc4e2',
              fontWeight: 'bold',
              color: 'black',
              borderRadius: '15px',
              transition: '0.2s ease-in-out',
              '&:hover': {
                bgcolor: '#00b2cf',
                color: '#c8aa6e'
              }
            }}
          >
            Chơi ngay
          </Button>
        </Box>
      </Box>

    </Box>
  )
}

export default Header
