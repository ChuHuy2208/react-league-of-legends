import Typography from '@mui/material/Typography'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import LolLogo from '~/assets/lol-logo.svg?react'
import { NavLink } from 'react-router-dom'
import '~/App.css'
import Box from "@mui/material/Box"

function NavLinks() {

  return (
    <>
      <nav className="nav-links">
        <NavLink to="/">
          <LolLogo />
        </NavLink> {" "}
        <NavLink to="/tro-choi" className="nav-link">
          <Typography className="typography-link" sx={{ fontWeight: 'bold', fontSize: '13px' }}>
            Trò chơi
          </Typography>
          <Box className="link-item-underline"></Box>
        </NavLink> {" "}
        <NavLink to="/tuong" className="nav-link">
          <Typography className="typography-link" sx={{ fontWeight: 'bold', fontSize: '13px' }}>
            Tướng
          </Typography>
          <Box className="link-item-underline"></Box>
        </NavLink> {" "}
        <NavLink to="/tin-tuc" className="nav-link">
          <Typography className="typography-link link-with-icon" sx={{ fontWeight: 'bold', fontSize: '13px' }}>
            Tin tức
            <ArrowDropDownIcon sx={{ fill: '#7e7e7e' }} />
          </Typography>
          <Box className="link-item-underline"></Box>
        </NavLink> {" "}
        <NavLink to="/chi-tiet-cap-nhat" className="nav-link">
          <Typography className="typography-link" sx={{ fontWeight: 'bold', fontSize: '13px' }}>
            Chi tiét cập nhật
          </Typography>
          <Box className="link-item-underline"></Box>
        </NavLink> {" "}
        <NavLink to="/esports" className="nav-link">
          <Typography className="typography-link link-with-icon" sx={{ fontWeight: 'bold', fontSize: '13px' }}>
            Esports
            <NorthEastIcon fontSize="" sx={{ fill: '#7e7e7e' }}/>
          </Typography>
          <Box className="link-item-underline"></Box>
        </NavLink> {" "}
        <NavLink to="/vu-tru" className="nav-link">
          <Typography className="typography-link link-with-icon" sx={{ fontWeight: 'bold', fontSize: '13px' }}>
            Vũ Trụ
            <NorthEastIcon fontSize="" sx={{ fill: '#7e7e7e' }}/>
          </Typography>
          <Box className="link-item-underline"></Box>
        </NavLink> {" "}
        <NavLink to="/ho-tro" className="nav-link">
          <Typography className="typography-link link-with-icon" sx={{ fontWeight: 'bold', fontSize: '13px' }}>
            Hỗ trợ
            <NorthEastIcon fontSize="" sx={{ fill: '#7e7e7e' }}/>
          </Typography>
          <Box className="link-item-underline"></Box>
        </NavLink>
      </nav>
    </>
  )
}

export default NavLinks
