import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import RiotLogo from '~/assets/riot-logo.svg?react'
import { SvgIcon } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

function TopDrawer() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }

  return (
    <Box>
      <Box 
        sx={{
          '&:hover': {
            '.MuiSvgIcon-root': {
              fill: 'red'
            }
          }
        }}
        onClick={toggleDrawer(true)}
      >
        <SvgIcon
          component={RiotLogo}
          inheritViewBox
          sx={{
            width: '75px',
            height: '24px',
            fill: 'white'
          }}
        />
        <SvgIcon
          component={ArrowDropDownIcon}
          inheritViewBox
          sx={{
            fill: '#7e7e7e'
          }}
        />
      </Box>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)} >
        <Box sx={{ bgcolor: '#f5f5f5', pt: 2, pb: 4, minHeight: '365px', height: '100%' }}>
          {/* Header Drawer */}
          <Box sx={{ px: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                '&:hover': {
                  '.MuiSvgIcon-root': {
                    fill: 'red'
                  }
                }
              }}
              onClick={toggleDrawer(false)}
            >
              <SvgIcon component={RiotLogo} inheritViewBox sx={{ fill: 'black', width: '75px', height: '24px' }} />
              <SvgIcon component={ArrowDropUpIcon} inheritViewBox sx={{ fill: 'black' }} />
            </Box>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container sx={{ px: 4, gap: 4 }}>
              {/* Cột 1: TRÒ CHƠI */}
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  bgcolor={"#bababa1a"}
                  fontSize={13}
                  p={"8px 12px 8px 16px"}
                >
                  TRÒ CHƠI
                </Typography>
                <Stack>
                  {['LIÊN MINH HUYỀN THOẠI', 'LMHT: TỐC CHIẾN', 'ĐẤU TRƯỜNG CHÂN LÝ', 'VALORANT', 'HUYỀN THOẠI RUNETERRA'].map((item) => (
                    <Typography
                      key={item}
                      variant="body2"
                      color="text.primary"
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#d13639'
                        }
                      }}
                      fontSize={13}
                      p={"8px 16px"}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>

              {/* Cột 2: FORGE */}
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  bgcolor={"#bababa1a"}
                  fontSize={13}
                  p={"8px 12px 8px 16px"}
                >
                  FORGE
                </Typography>
                <Stack>
                  {['CONVRGENCE', 'RUINED KING', 'SONG OF NUNU', 'TRÒ CHƠI CỦA RIOT FORGE'].map((item) => (
                    <Typography
                      key={item}
                      variant="body2"
                      color="text.primary"
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#d13639'
                        }
                      }}
                      fontSize={13}
                      p={"8px 16px"}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>

                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  mt={4}
                  bgcolor={"#bababa1a"}
                  fontSize={13}
                  p={"8px 12px 8px 16px"}
                >
                  ESPORTS
                </Typography>
                <Stack>
                  {['LOL ESPORTS', 'VALORANT ESPORTS'].map((item) => (
                    <Typography
                      key={item}
                      variant="body2"
                      color="text.primary"
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#d13639'
                        }
                      }}
                      p={"8px 16px"}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>

              {/* Cột 3: GIẢI TRÍ & KINH DOANH */}
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  bgcolor={"#bababa1a"}
                  fontSize={13}
                  p={"8px 12px 8px 16px"}
                >
                  GIẢI TRÍ
                </Typography>
                <Stack>
                  {['ARCANE', 'VŨ TRỤ', 'RIOT GAMES MUSIC'].map((item) => (
                    <Typography
                      key={item}
                      variant="body2"
                      color="text.primary"
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#d13639'
                        }
                      }}
                      p={"8px 16px"}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>

                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  mt={4}
                  bgcolor={"#bababa1a"}
                  fontSize={13}
                  p={"8px 12px 8px 16px"}
                >
                  KINH DOANH
                </Typography>
                <Stack>
                  {['RIOT GAMES', 'HỖ TRỢ RIOT'].map((item) => (
                    <Typography
                      key={item}
                      variant="body2"
                      color="text.primary"
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#d13639'
                        }
                      }}
                      p={"8px 16px"}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>

            <Grid sx={{ px: 4 }}>
              {/* Cột 4: Banner lớn Valorant + Social Impact Fund + text */}
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: 'flex',
                  gap: 4,
                  width: 'fit-content',
                  height: 'fit-content'
                }}
              >
                {/* Banner Valorant */}
                <Box 
                  sx={{
                    borderRadius: 2,
                    mb: 2,
                    maxWidth: '452px',
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '452px',
                      width: '100%',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)', // bóng mặc định
                      transition: 'all 0.3s ease', // mượt mà
                      '&:hover': {
                        boxShadow: '0 14px 28px rgba(0, 0, 0, .05), 0 10px 10px rgba(0, 0, 0, .02)', // bóng đậm hơn khi hover (hoặc dùng giá trị tùy chỉnh)
                      },
                    }}
                  >
                    <img
                      src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar_live/ef36308f397ba5305d706f3ab06df18f9277737f-660x428.jpg??&format=pjpg&quality=85"
                      alt="VALORANT"
                      style={{
                        width: '100%',
                        display: 'block',
                      }}
                    />
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body2" fontSize={13}>
                      Khám phá vẻ đẹp đầy "gai góc" của Corrode. Vùng đất mới, với năng lượng quen thuộc.
                    </Typography>
                  </Box>
                </Box>

                {/* Social Impact Fund */}
                <Box sx={{ borderRadius: 2, mb: 2, maxWidth: '452px', width: '100%' }}>
                  <Box
                    sx={{
                      maxWidth: '452px',
                      width: '100%',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)', // bóng mặc định
                      transition: 'all 0.3s ease', // mượt mà
                      '&:hover': {
                        boxShadow: '0 14px 28px rgba(0, 0, 0, .05), 0 10px 10px rgba(0, 0, 0, .02)', // bóng đậm hơn khi hover (hoặc dùng giá trị tùy chỉnh)
                      },
                    }}
                  >
                    <img
                      src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar_live/ca5ae249b0b607ef363fcf082780c784211cf434-660x428.jpg??&format=pjpg&quality=85"
                      alt="Riot Games Social Impact Fund"
                      style={{maxWidth: '452px', width: '100%' }}
                    />
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body2" fontSize={13}>
                      Hơn 5 triệu USD đã được đóng góp bởi người chơi - hãy chọn tổ chức từ thiện bạn muốn ngay hôm nay
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default TopDrawer
