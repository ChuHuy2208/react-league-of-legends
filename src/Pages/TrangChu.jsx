import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import '~/App.css'

function TrangChu() {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ maxHeight: '1080px', height: '80dvh' }}>
          <video autoPlay muted loop preload="auto" playsInline>
            <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm?accountingTag=LoL" />
          </video>
          <Box className="overlay overlay-02"></Box>
          <Box className="overlay overlay-01"></Box>
        </Box>
        <Box className="section-1-info">
          <Box className="top-content">
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?accountingTag=LoL?auto=format&fit=fill&q=80&w=281" alt="league of legends" />
            <Box>
              <Typography 
                sx={{
                  textAlign: 'center',
                  textWrap: 'balance',
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'white',
                  mt: '32px',
                  mb: '64px',
                  fontSize: { xs: '16px', md: '20px' }
                }}
              >
                Liên Minh Huyền Thoại - Tựa game MOBA 5v5, nơi mỗi đội cần phá hủy Nhà Chính của đối thủ để chiến thắng
              </Typography>
            </Box>
            <Box 
              sx={{
                textTransform: 'uppercase',
                bgcolor: '#c8aa6e',
                py: '18px',
                px: '32px',
                outline: '1px solid #c8aa6e',
                outlineOffset: '3px',
                fontSize: '18px',
                width: { xs: '100%', sm: 'fit-content' },
                textAlign: 'center'
              }}
            >
              <a href="">Chơi miễn phí</a>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: 'url("https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4c59eeaf4adc540fd42745bd5c71563fba8f6288-3840x1328.png?accountingTag=LoL?auto=format&fit=fill&q=80&w=3840")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          p: '48px'
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '24px', md: '32px' },
            textTransform: 'uppercase',
            fontStyle: 'italic'
          }}
        >
          Tin tức nổi bật
        </Typography>
        <Box className="news-items">
          <Box className="news-item">
            <Box className="news-item-info">
              <Box className="image-wrapper">
                <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/31823b2f59441e78a7e8c2c0f0663ca840ccb932-1920x1080.jpg?accountingTag=LoL?auto=format&fit=crop&q=80&h=239&w=425&crop=center" alt="leagues of legends" />
                <span className="link-square"></span>
              </Box>
              <Box className="news-card">
                <Box className="card-body">
                  <Box className="card-category">
                    Esports
                  </Box>
                  <Box className="straight"></Box>
                  <Box className="card-time">
                    22/12/2025
                  </Box>
                </Box>
                <Box className="card-title">
                  Ground Zero Gaming Sẽ Gia Nhập LCP Trong Mùa Giải 2026
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="news-item">
            <Box className="news-item-info">
              <Box className="image-wrapper">
                <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/5a687de691d62827108c564c29327e68e895e473-1920x1080.jpg?accountingTag=LoL?auto=format&fit=crop&q=80&h=239&w=425&crop=center" alt="leagues of legends" />
                <span className="link-square"></span>
              </Box>
              <Box className="news-card">
                <Box className="card-body">
                  <Box className="card-category">
                    Esports
                  </Box>
                  <Box className="straight"></Box>
                  <Box className="card-time">
                    3/12/2025
                  </Box>
                </Box>
                <Box className="card-title">
                  Giới Thiệu Mic Check HLV Tại LCP
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="news-item">
            <Box className="news-item-info">
              <Box className="image-wrapper">
                <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/db481e5be34d32ceed87d4747e3bf5b4fef876db-1280x720.jpg?accountingTag=LoL?auto=format&fit=crop&q=80&h=239&w=425&crop=center" alt="leagues of legends" />
                <span className="play-video-button"></span>
              </Box>
              <Box className="news-card">
                <Box className="card-body">
                  <Box className="card-category">
                    Đội Ngũ Phát Triển
                  </Box>
                  <Box className="straight"></Box>
                  <Box className="card-time">
                    1/12/2025
                  </Box>
                </Box>
                <Box className="card-title">
                  ĐNPT: Mùa 1 2026 - Chủ Đề, Lối Chơi & Cập Nhật Khác
                </Box>
                <Box className="card-desc">
                  Pabro và Meddler trò chuyện về Mùa 1 2026 với chủ đề, lối chơi, Đấu Siêu Tốc, WASD và hơn thế.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default TrangChu
