import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
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
      <p>&copy; 2026 제주P2C (CCC) 제주훈련원. All rights reserved.</p>
      <p>제주특별자치도 제주시 이도 노브힐오피스텔 </p>
      <p>문의: 이언균 010-3809-7451 </p>
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

  const displayDescription = category.fullDescription || category.description;

  return (
    <div className="section">
      <div className="container">
        <div className="section-title">
          <h2>{category.title} 사역</h2>
          <div className="category-description-box">
            {displayDescription.split('\n').map((line, idx) => {
              const isTitle = /^[0-9]\./.test(line.trim());
              return (
                <p key={idx} style={{ 
                  fontWeight: isTitle ? '700' : '400',
                  color: isTitle ? 'var(--primary)' : 'inherit',
                  marginBottom: line.trim() === '' ? '15px' : '5px',
                  fontSize: isTitle ? '1.2rem' : '1.1rem'
                }}>
                  {line}
                </p>
              );
            })}
          </div>
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
            
            {item.subItems && (
              <div style={{ marginTop: '40px' }}>
                <div className="card-grid">
                  {item.subItems.map((sub, idx) => (
                    <div key={idx} className="card" style={{ cursor: 'default' }}>
                      <h3 style={{ fontSize: '1.25rem' }}>{sub.title}</h3>
                      <p style={{ fontWeight: '600', color: 'var(--secondary)', marginBottom: '10px' }}>{sub.tagline}</p>
                      <p className="card-description" style={{ fontSize: '0.95rem' }}>{sub.description}</p>
                      {sub.list && (
                        <ul className="detail-list" style={{ marginTop: 'auto' }}>
                          {sub.list.map((li, lidx) => (
                            <li key={lidx} style={{ fontSize: '0.9rem' }}>{li}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {item.image && (
        <div className="container" style={{ marginTop: '20px', textAlign: 'center' }}>
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ 
              maxWidth: '100%', 
              borderRadius: 'var(--border-radius)', 
              boxShadow: 'var(--shadow)',
              marginBottom: '40px'
            }} 
          />
        </div>
      )}
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
