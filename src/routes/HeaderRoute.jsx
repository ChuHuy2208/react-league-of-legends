import { Routes, Route } from 'react-router-dom'
import TrangChu from '~/Pages/TrangChu'
import TroChoi from '~/Pages/TroChoi'
import Tuong from '~/Pages/Tuong'
import TinTuc from '~/Pages/TinTuc'
import ChiTietCapNhat from '~/Pages/ChiTietCapNhat'
import Esports from '~/Pages/Esports'
import VuTru from '~/Pages/VuTru'
import HoTro from '~/Pages/HoTro'

function HeaderRoute() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/tro-choi" element={<TroChoi />} />
      <Route path="/tuong" element={<Tuong />} />
      <Route path="/tin-tuc" element={<TinTuc />} />
      <Route path="/chi-tiet-cap-nhat" element={<ChiTietCapNhat />} />
      <Route path="/esports" element={<Esports />} />
      <Route path="/vu-tru" element={<VuTru />} />
      <Route path="/ho-tro" element={<HoTro />} />
    </Routes>
  )
}

export default HeaderRoute
