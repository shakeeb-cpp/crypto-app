
import './App.css';
// import from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Gainers, Losers } from './components';

function App() {
  return (
    <div className="app">

      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes2">
            <Routes>
              <Route exact path='/' element={<Homepage />} />
            </Routes>
            <Routes>
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
            </Routes>
            <Routes>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
            </Routes>
            <Routes>
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
          <div className="routes">
            <Routes>
              <Route exact path='/exchanges' element={<Exchanges />} />
            </Routes>
            <Routes>
              <Route exact path='/gainers' element={<Gainers />} />
            </Routes>
            <Routes>
              <Route exact path='/losers' element={<Losers />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }} >
            CryptoBase <br />
            All copyrights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div >
    </div >
  );
}

export default App;
