import './index.css'

const menu = [
  {
    cat: 'Sandwichs',
    emoji: '',
    items: [
      { name: 'Sandwich Agneau', desc: 'Pain maison, viande agneau, salade, tomate, sauce maison' },
      { name: 'Sandwich Poulet', desc: 'Pain maison, poulet grillé, salade, tomate, sauce maison' },
      { name: 'Sandwich Mixte', desc: 'Pain maison, agneau + poulet, salade, tomate, sauce maison' },
    ],
  },
  {
    cat: 'Assiettes',
    emoji: '',
    items: [
      { name: 'Assiette Agneau', desc: 'Viande d\'agneau, frites, salade, pain' },
      { name: 'Assiette Poulet', desc: 'Poulet grillé, frites, salade, pain' },
      { name: 'Assiette Mixte', desc: 'Agneau + poulet, frites, salade, pain' },
    ],
  },
  {
    cat: 'Tacos',
    emoji: '',
    items: [
      { name: 'Tacos Poulet', desc: 'Galette, poulet, frites, fromage fondu, sauce' },
      { name: 'Tacos Mixte', desc: 'Galette, agneau + poulet, frites, fromage fondu, sauce' },
      { name: 'Tacos XXL', desc: 'Galette maxi, double viande, frites, fromage fondu, sauce' },
    ],
  },
  {
    cat: 'Extras & Desserts',
    emoji: '',
    items: [
      { name: 'Frites Maison', desc: 'Frites fraîches dorées à la perfection' },
      { name: 'Baklava', desc: 'Pâtisserie turque au miel et aux noix' },
      { name: 'Tiramisu', desc: 'Dessert crémeux à la vanille' },
    ],
  },
]

const infos = [
  { label: 'Adresse', value: '14 Cours Mgr Roméro\n91000 Évry-Courcouronnes' },
  { label: 'Téléphone', value: '07 51 21 82 95' },
  { label: 'Horaires', value: 'Ouvert 7j/7\nMidi & Soir' },
  { label: 'Services', value: 'Sur place · À emporter\nTerrasse · Halal · CB acceptée' },
]

export default function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: '#111', color: 'white', margin: 0 }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem', height: '65px',
        borderBottom: '1px solid rgba(201,138,60,0.3)',
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", color: '#C98A3C', fontSize: '1.5rem', letterSpacing: '3px', fontWeight: 700 }}>
          ANATOLIA
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['menu', 'infos'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', color: '#ccc', cursor: 'pointer',
              fontSize: '0.82rem', letterSpacing: '2px', textTransform: 'uppercase',
              transition: 'color 0.3s', fontFamily: "'Lato', sans-serif",
            }}
              onMouseEnter={e => e.target.style.color = '#C98A3C'}
              onMouseLeave={e => e.target.style.color = '#ccc'}
            >
              {id === 'menu' ? 'Menu' : 'Nous trouver'}
            </button>
          ))}
          <a href="tel:0751218295" style={{
            background: '#C98A3C', color: 'white', padding: '9px 20px',
            textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '1px',
            fontFamily: "'Lato', sans-serif", transition: 'background 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#a8722e'}
            onMouseLeave={e => e.currentTarget.style.background = '#C98A3C'}
          >
            Appeler
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1600&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)' }} />

        <div style={{ position: 'relative', textAlign: 'center', padding: '0 1.5rem', maxWidth: '700px' }}>
          {/* Badge halal */}
          <div style={{
            display: 'inline-block', background: '#C98A3C', color: 'white',
            padding: '5px 18px', fontSize: '0.72rem', letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            100% Halal
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            margin: '0 0 0.5rem', lineHeight: 1, fontWeight: 700,
            color: 'white',
          }}>
            ANATOLIA
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: '#C98A3C',
            letterSpacing: '3px', textTransform: 'uppercase',
            margin: '0 0 1.5rem', fontWeight: 300,
          }}>
            Kebab Turc — Évry-Courcouronnes
          </p>

          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Sandwichs, assiettes, tacos.<br />
            Viande fraîche, pain maison, saveurs authentiques.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo('menu')} style={{
              background: '#C98A3C', color: 'white', padding: '15px 40px',
              border: 'none', fontSize: '0.88rem', letterSpacing: '2px',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.3s',
              fontFamily: "'Lato', sans-serif",
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#a8722e'}
              onMouseLeave={e => e.currentTarget.style.background = '#C98A3C'}
            >
              Voir le menu
            </button>
            <a href="tel:0751218295" style={{
              background: 'transparent', color: 'white', padding: '15px 40px',
              border: '2px solid rgba(255,255,255,0.5)', fontSize: '0.88rem',
              letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer',
              textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s',
              fontFamily: "'Lato', sans-serif",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#111' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white' }}
            >
              07 51 21 82 95
            </a>
          </div>
        </div>

        {/* scroll */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.5, animation: 'bounce 2s infinite' }}>↓</div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ padding: '5rem 1.5rem', background: '#111' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#C98A3C', letterSpacing: '4px', fontSize: '0.75rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem' }}>
            Ce qu&apos;on fait
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', margin: '0 0 0.5rem', color: 'white' }}>
            Notre Menu
          </h2>
          <div style={{ width: '50px', height: '3px', background: '#C98A3C', margin: '0 auto 3.5rem' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {menu.map(({ cat, items }) => (
              <div key={cat}>
                {/* Category header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  marginBottom: '1.25rem', paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(201,138,60,0.3)',
                }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', margin: 0, color: '#C98A3C' }}>
                    {cat}
                  </h3>
                </div>

                {/* Items grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  {items.map(item => (
                    <div key={item.name} style={{
                      background: '#1a1a1a', padding: '1.25rem 1.5rem',
                      borderRadius: '4px', borderLeft: '3px solid #C98A3C',
                      transition: 'background 0.2s, transform 0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#222'; e.currentTarget.style.transform = 'translateX(4px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.transform = 'translateX(0)' }}
                    >
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', color: 'white' }}>
                        {item.name}
                      </div>
                      <div style={{ color: '#888', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div style={{ background: '#C98A3C', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'white', margin: '0 0 0.75rem', lineHeight: 1.5 }}>
            Viande fraîche, recettes traditionnelles, générosité garantie.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {['Halal', 'Viande fraîche', 'Sur place', 'À emporter'].map(tag => (
              <span key={tag} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', letterSpacing: '1px' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* INFOS */}
      <section id="infos" style={{ padding: '5rem 1.5rem', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#C98A3C', letterSpacing: '4px', fontSize: '0.75rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem' }}>
            Où nous trouver
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', margin: '0 0 0.5rem', color: 'white' }}>
            Infos pratiques
          </h2>
          <div style={{ width: '50px', height: '3px', background: '#C98A3C', margin: '0 auto 3.5rem' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {infos.map(({ label, value }) => (
              <div key={label} style={{
                background: '#1a1a1a', padding: '1.75rem',
                borderTop: '3px solid #C98A3C', textAlign: 'center',
                borderRadius: '2px',
              }}>
                <div style={{ color: '#C98A3C', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{label}</div>
                <div style={{ color: '#ccc', lineHeight: 1.7, whiteSpace: 'pre-line', fontSize: '0.95rem' }}>{value}</div>
              </div>
            ))}
          </div>

          {/* CTA call */}
          <div style={{ textAlign: 'center' }}>
            <a href="tel:0751218295" style={{
              display: 'inline-block', background: '#C98A3C', color: 'white',
              padding: '16px 50px', textDecoration: 'none',
              fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase',
              fontFamily: "'Lato', sans-serif", transition: 'background 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#a8722e'}
              onMouseLeave={e => e.currentTarget.style.background = '#C98A3C'}
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#000', padding: '2rem 1.5rem', textAlign: 'center', borderTop: '1px solid #222' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", color: '#C98A3C', fontSize: '1.4rem', letterSpacing: '4px', marginBottom: '0.5rem' }}>
          ANATOLIA
        </div>
        <p style={{ color: '#555', fontSize: '0.82rem', margin: '0' }}>
          Kebab Turc Halal — 14 Cours Mgr Roméro, Évry-Courcouronnes
        </p>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
        body { margin: 0; }
      `}</style>
    </div>
  )
}
