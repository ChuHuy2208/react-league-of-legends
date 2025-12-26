import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import RiotLogo from '~/assets/riot-logo.svg?react'
import SvgIcon from '@mui/material/SvgIcon'

function Footer() {
  return (
    <Box sx={{ width: '100vw', p: '0 0 48px', bgcolor: '#111' }}>
      <Box
        sx={{
          bgcolor: '#292929',
          p: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Box sx={{
          '&:hover': {
            bgcolor: '#8080804d',
          },
          borderRadius: '10px',
          transition: '0.2s ease-in-out',
          cursor: 'pointer'
        }}>
          <Typography sx={{ p: '8px 16px', fontWeight: 'bold', fontSize: '13px' }}>VỀ LIÊN MINH HUYỀN THOẠI</Typography>
        </Box>
        <Box sx={{
          '&:hover': {
            bgcolor: '#8080804d',
          },
          borderRadius: '10px',
          transition: '0.2s ease-in-out',
          cursor: 'pointer'
        }}>
          <Typography sx={{ p: '8px 16px', fontWeight: 'bold', fontSize: '13px' }}>HỖ TRỢ</Typography>
        </Box>
        <Box sx={{
          '&:hover': {
            bgcolor: '#8080804d',
          },
          borderRadius: '10px',
          transition: '0.2s ease-in-out',
          cursor: 'pointer'
        }}>
          <Typography sx={{ p: '8px 16px', fontWeight: 'bold', fontSize: '13px' }}>TRANG ESPORTS CHÍNH</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            p: '18px 0'
          }}
        >
          <Box sx={{
            bgcolor: 'rgba(128, 128, 128, .2)',
            p: 0.5,
            borderRadius: '12px'
          }}>
            <FacebookIcon sx={{ color: 'white' }}/>
          </Box>
          <Box sx={{
            bgcolor: 'rgba(128, 128, 128, .2)',
            p: 0.5,
            borderRadius: '12px'
          }}>
            <InstagramIcon sx={{ color: 'white' }}/>
          </Box>
          <Box sx={{
            bgcolor: 'rgba(128, 128, 128, .2)',
            p: 0.5,
            borderRadius: '12px'
          }}>
            <YouTubeIcon sx={{ color: 'white' }}/>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 2,
          justifyContent: 'center',
          p: '24px 0 20px'
        }}>
          <SvgIcon
            component={RiotLogo}
            inheritViewBox
            sx={{
              width: '99px',
              height: '32px',
              fill: '#737373',
              '&:hover': { fill: 'white' },
              cursor: 'pointer'
            }}
          />
          <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/4487be6bfcce69b795ed84dd12923fed7d28bfe9-116x17.png?&h=75&fit=max" alt="league-of-legends" />
        </Box>

        <Typography
          sx={{
            maxWidth: '640px',
            width: '100%',
            m: '0 auto',
            textAlign: 'center',
            color: '#7e7e7e',
            fontSize: '13px'
          }}
        >
          © 2009-2022 bởi Tập Đoàn Riot Games. LIÊN MINH HUYỀN THOẠI và mọi logo liên quan là nhãn hiệu, nhãn hiệu dịch vụ và/hoặc nhãn hiệu đã đăng ký của Tập Đoàn Riot Games.
        </Typography>

        <Box
          sx={{
            p: '24px 0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textTransform: 'uppercase',
          }}
        >
          <Box sx={{
            p: '8px 16px',
            '&:hover': {
              bgcolor: '#8080804d'
            },
            borderRadius: '7px'
          }}>
            <Typography sx={{fontSize: '13px', fontWeight: 'bold' }}>Chính Sách Bảo Mật</Typography>
          </Box>
          <Box sx={{
            p: '8px 16px',
            '&:hover': {
              bgcolor: '#8080804d'
            },
            borderRadius: '7px'
          }}>
            <Typography sx={{fontSize: '13px', fontWeight: 'bold' }}>Điều Khoản Sử Dụng (Riot)</Typography>
          </Box>
          <Box sx={{
            p: '8px 16px',
            '&:hover': {
              bgcolor: '#8080804d'
            },
            borderRadius: '7px'
          }}>
            <Typography sx={{fontSize: '13px', fontWeight: 'bold' }}>Tùy Chọn Cookies</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            p: '8px 12px',
            bgcolor: '#292929',
            width: 'fit-content',
            m: '0 auto',
            borderRadius: '10px'
          }}
        >
          <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/955297b6af6c805bf77e0b41248050a29435018d-1280x571.png?&h=100&fit=max" alt="league-of-legends" />
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
