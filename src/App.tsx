import { Layout } from 'antd';
import './App.css';
import AppHeader from './components/common/Header';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppAbout from './pages/about';
import AppContact from './pages/contact';
import AppFAQ from './pages/faq';
import AppHome from './pages/home';
import AppShop from './pages/shop';

const { Header, Footer, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<AppHome />} />
              <Route path='/about' element={<AppAbout />} />
              <Route path='/shop' element={<AppShop />} />
              <Route path='/faq' element={<AppFAQ />} />
              <Route path='/contact' element={<AppContact />} />
            </Routes>
          </Content>
        </Router>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
