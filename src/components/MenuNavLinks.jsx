import Typography from '@mui/material/Typography'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '~/App.css'

function MenuNavLinks() {
  const [ setOpen ] = useState(false)

  return (
    <>
      <nav className="menu-nav-links">
        <NavLink to="/tro-choi" className="menu-nav-link" onClick={() => setOpen(false)}>
          <Typography className="menu-typography-link" sx={{ fontWeight: 'bold' }}>
            Trò chơi
          </Typography>
        </NavLink>
        <NavLink to="/tuong" className="menu-nav-link" onClick={() => setOpen(false)}>
          <Typography className="menu-typography-link" sx={{ fontWeight: 'bold' }}>
            Tướng
          </Typography>
        </NavLink>
        <NavLink to="/tin-tuc" className="menu-nav-link" onClick={() => setOpen(false)}>
          <Typography className="menu-typography-link menu-link-with-icon" sx={{ fontWeight: 'bold' }}>
            Tin tức
            <ArrowDropDownIcon sx={{ fill: '#7e7e7e' }} />
          </Typography>
        </NavLink>
        <NavLink to="/chi-tiet-cap-nhat" className="menu-nav-link" onClick={() => setOpen(false)}>
          <Typography className="menu-typography-link" sx={{ fontWeight: 'bold' }}>
            Chi tiết cập nhật
          </Typography>
        </NavLink>
        <NavLink to="/esports" className="menu-nav-link" onClick={() => setOpen(false)}>
          <Typography className="menu-typography-link menu-link-with-icon" sx={{ fontWeight: 'bold' }}>
            Esports
            <NorthEastIcon fontSize="" sx={{ fill: '#7e7e7e' }}/>
          </Typography>
        </NavLink>
        <NavLink to="/vu-tru" className="menu-nav-link" onClick={() => setOpen(false)}>
          <Typography className="menu-typography-link menu-link-with-icon" sx={{ fontWeight: 'bold' }}>
            Vũ Trụ
            <NorthEastIcon fontSize="" sx={{ fill: '#7e7e7e' }}/>
          </Typography>
        </NavLink>
        <NavLink to="/ho-tro" className="menu-nav-link" onClick={() => setOpen(false)}>
          <Typography className="menu-typography-link menu-link-with-icon" sx={{ fontWeight: 'bold' }}>
            Hỗ trợ
            <NorthEastIcon fontSize="" sx={{ fill: '#7e7e7e' }}/>
          </Typography>
        </NavLink>
      </nav>
    </>
  )
}

export default MenuNavLinks
