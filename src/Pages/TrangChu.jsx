import { Button, Typography } from '@mui/material'
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

      <Box sx={{ bgcolor: 'rgb(255, 255, 255)', position: 'relative' }}>
        <Box
          sx={{
            maxWidth: 'calc(1920px - 320px)',
            width: '100%',
            m: '0 auto'
          }}
        >
          <Box
            sx={{
              backgroundImage: 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=656)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display:'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              px: '32px',
              py: '48px',
              flexDirection: { xs: 'column', lg: 'row' }
            }}
          >
            <Box sx={{ maxWidth: '720px', width: '100%', display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center',  }}>
                <Typography sx={{ fontSize: '22px', color: '#0a1428' }}>CHỌN NGAY MỘT</Typography>
                <Typography sx={{ fontSize: '64px', color: '#0a1428', fontWeight: 'bold', fontStyle: 'italic' }}>TƯỚNG</Typography>
                <Typography sx={{ fontSize: '18px', color: '#0a1428', textAlign: 'center' }}>Cho dù thích lao vào giao tranh, thích hỗ trợ đồng đội hoặc cả hai, bạn sẽ luôn tìm thấy vị trí thích hợp dành cho mình trong Summoner's Rift.</Typography>

                <Box sx={{ display: 'flex', gap: 2, mt: 6, flexDirection: { xs: 'column', sm: 'row' }, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <Button sx={{ color: 'black', p: '18px 32px', bgcolor: '#c8aa6e', width: { xs: '100%', sm: 'fit-content' } }}>Khám Phá Thêm Các Vị Tướng</Button>
                  <Button sx={{ color: 'black', p: '18px 32px', bgcolor: '#59c1de', width: { xs: '100%', sm: 'fit-content' } }}>Chơi ngay</Button>
                </Box>
              </Box>

              <Box sx={{ mt: 9,  width: '100%' }}>
                <Box sx={{  display: 'flex', gap: 5, overflowX: 'auto', overflowY: 'hidden' }}>
                  <Box className="icon-choose" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e1511d4d93a84b836844c77b4ff96b1cf65f4f8d-220x220.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                    <Typography className="icon-desc">Sát thủ</Typography>
                  </Box>
                  <Box className="icon-select" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/651b0a4388dffbb709588546d7d73fd1a4e5b45d-220x220.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                    <Typography className="icon-desc">Đấu sĩ</Typography>
                  </Box>
                  <Box className="icon-select" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9872a60add3d215d217eda67e08a07ef7191ab89-220x220.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                    <Typography className="icon-desc">Pháp sư</Typography>
                  </Box>
                  <Box className="icon-select" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fce8a3c7b1267ce428530fa845dd3f970772d5cd-220x220.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                    <Typography className="icon-desc">Xạ thủ</Typography>
                  </Box>
                  <Box className="icon-select" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1824a47af762aeac9d88d3bae5a4eb2ece928f0d-220x220.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                    <Typography className="icon-desc">Hỗ trợ</Typography>
                  </Box>
                  <Box className="icon-select" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/019898f21e749a5f6f71b609714d87f3fe084df5-220x220.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                    <Typography className="icon-desc">Đỡ đòn</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 20, '& img': { width: '100%' } }}>
              <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=613" alt="akali" />
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#0a1428', fontWeight: 'bold', fontSize: '24px', fontStyle: 'italic' }}>AKALI</Typography>
                <Typography sx={{ color: '#6c727e' }}>Sát thủ đơn độc</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        backgroundImage: 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a6f94cd5ed222d3b99e535f17cd9592d3c716bb5-3840x1616.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&h=680)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}>
        <Box
          sx={{
            maxWidth: 'calc(1920px - 320px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            m: '0 auto',
            p: '48px',
            flexDirection: { xs: 'column-reverse', lg: 'row' }
          }}
        >
          <Box sx={{ '& img': { width: '100%' } }}>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/76c98a7d43d4185e9ce1c9e0cd6f9647fed75acd-1304x1304.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=774" alt="league-of-legends" />
          </Box>
          <Box sx={{ color: 'white' }}>
            <Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  fontStyle: 'italic'
                }}
              >
                HẠ GỤC KẺ ĐỊCH
              </Typography>
              <Typography
                sx={{
                  fontSize: '80px',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  textWrap: 'balance',
                  lineHeight: '88px'
                }}
              >
                MỘT CÁCH SANG CHẢNH
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px'
                }}
              >
                Thay đổi diện mạo các vị tướng yêu thích với trang phục để tạo nên điểm nhấn của riêng bạn.
              </Typography>
            </Box>
            <Box
              sx={{
                color: 'black',
                bgcolor: '#c8aa6e',
                width: { xs: '100%', sm: 'fit-content' },
                p: '18px 32px',
                mt: 7,
                textAlign: 'center'
              }}
            >
              <a>Chơi ngay</a>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: 'url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0eb5bc3bbb7794eceea3a5e7948906e1cbcd027f-5120x1810.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=1600)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backrgroundPosition: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 'calc(1920px - 320px)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            m: '0 auto',
            p: '48px',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '736px',
              width: '100%',
              color: 'white'
            }}
          >
            <Box sx={{ textAlign: 'center', width: '100%' }}>
              <Box>
                <Typography sx={{ fontSize: '22px' }}>RẤT NHIỀU CÁCH</Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '64px', fontStyle:'italic' }}>CHƠI</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: '#c8aa6e',
                  color: 'black',
                  width: { xs: '100%', sm: 'fit-content' },
                  m: '0 auto',
                  mt: 6,
                  p: '18px 32px'
                }}
              >
                <a>Chơi ngay</a>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                mt: 6,
                gap: 5
              }}
            >
              <Box
                className="icon-choose"
                sx={{
                  maxWidth: '80px',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e50f5eb867949248d81b3c4a1dcb3e7d7cf187de-440x440.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                <Typography className="icon-desc" sx={{ mt: 2 }}>SUMMONER'S RIFT</Typography>
              </Box>
              <Box
                className="icon-select"
                sx={{
                  maxWidth: '80px',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/88a013a106668103aedbceb8f174bd4cbc06568b-440x440.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                <Typography className="icon-desc" sx={{ mt: 2 }}>ARAM</Typography>
              </Box>
              <Box
                className="icon-select"
                sx={{
                  maxWidth: '80px',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                <img className="icon" src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d1df552539dd70a8ffd38b6e93d1e751fb980ea6-440x440.png?accountingTag=league_of_legends_website?auto=format&fit=crop&q=80&h=80&w=80&crop=center" alt="league-of-legends" />
                <Typography className="icon-desc" sx={{ mt: 2 }}>Đấu Trường Chân Lý</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              color: 'white',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 6
            }}
          >
            <Box
              sx={{
                '& video': {
                  borderRadius: '50%',
                  maxWidth: '684px',
                  width: '100%',
                  outline: '2px solid rgb(200, 170, 110)',
                  outlineOffset: '10px'
                },
              }}
            >
              <video autoPlay loop muted preload="auto" playsInline>
                <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4?accountingTag=league_of_legends_website" />
              </video>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  fontStyle: 'italic'
                }}
              >
                CHẾ ĐỘ CHƠI PHỔ BIẾN NHẤT
              </Typography>
              <Typography sx={{ fontSize: '18px' }} >
                Dọn đường, tham gia giao tranh tổng, phá hủy Nhà Chính của địch trước khi Nhà Chính của bạn bị phá hủy.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Box sx={{ maxHeight: '1080px', height: '80dvh' }}>
          <video autoPlay loop muted preload="auto" playsInline>
            <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/1f5b2cf01a1cf2afa1ce61febee6e2e900808347.mp4?accountingTag=league_of_legends_website" />
          </video>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#c8aa6e',
            p: '18px 32px',
            textTransform: 'uppercase',
            fontSize: '18px'
          }}
        >
          <a>Chơi miễn phí</a>
        </Box>
      </Box>
    </>
  )
}

export default TrangChu
