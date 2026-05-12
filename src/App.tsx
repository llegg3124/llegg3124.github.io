import { HashRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { ministryData, categories, MinistryItem } from './data/content';

const Header = () => (
  <header className="header">
    <div className="container header-content">
      <Link to="/" className="logo">제주P2C (CCC) 제주훈련원</Link>
      <nav className="nav-links">
        <Link to="/category/church" className="nav-link">교회</Link>
        <Link to="/category/family" className="nav-link">가정</Link>
        <Link to="/category/workplace" className="nav-link">일터</Link>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2024 제주P2C (CCC) 제주훈련원. All rights reserved.</p>
      <p>제주특별자치도 제주시 </p>
      <p>이언균 010-0000-0000 </p>
    </div>
  </footer>
);

const Home = () => (
  <div className="home-container">
    <img src="/bg_0.jpg" alt="" className="decorative-img img-pos-1" />
    <img src="/bg_1.jpg" alt="" className="decorative-img img-pos-2" />
    <section className="hero">
      <div className="container">
        <h1>제주P2C (CCC) 제주훈련원</h1>
        <p>도시 복음화와 영적 부흥을 향한 거룩한 발걸음</p>
      </div>
    </section>
    
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>사역 분야</h2>
          <p>교회, 가정, 일터를 변화시키는 하나님의 전략</p>
        </div>
        <div className="card-grid">
          {categories.map(cat => (
            <Link to={`/category/${cat.id}`} key={cat.id} className="card">
              <h3>{cat.title}</h3>
              <p className="card-description">{cat.description}</p>
              <div className="card-footer">더 알아보기</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const CategoryPage = () => {
  const { catId } = useParams<{ catId: string }>();
  const category = categories.find(c => c.id === catId);
  const items = ministryData.filter(item => item.category === catId);

  if (!category) return <div>Category not found</div>;

  return (
    <div className="section">
      <div className="container">
        <div className="section-title">
          <h2>{category.title} 사역</h2>
          <p>{category.description}</p>
        </div>
        <div className="card-grid">
          {items.map(item => (
            <Link to={`/detail/${item.id}`} key={item.id} className="card">
              <h3>{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <div className="card-footer">상세 정보</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const DetailPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const item = ministryData.find(i => i.id === itemId);

  if (!item) return <div>Item not found</div>;

  return (
    <div>
      <div className="detail-header">
        <div className="container">
          <h1>{item.title}</h1>
          <p className="detail-core">{item.coreMessage}</p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="detail-content">
            <p className="detail-desc">{item.description}</p>
            <ul className="detail-list">
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:catId" element={<CategoryPage />} />
            <Route path="/detail/:itemId" element={<DetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
