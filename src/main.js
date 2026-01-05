import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Icons as SVG strings
const Icons = {
  github: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  linkedin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  globe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  mail: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  gitBranch: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
  download: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
}

const htmlContent = `
  <div class="fixed-bg">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
    <div class="noise-overlay"></div>
  </div>

  <header>
    <nav class="nav-links">
      <a href="#about" class="nav-link">About</a>
      <a href="#projects" class="nav-link">Work</a>
      <a href="#contact" class="nav-link">Contact</a>
      <a href="/Resume.pdf" target="_blank" class="nav-link">Resume</a>
    </nav>
  </header>

  <div class="social-sidebar">
    <a href="https://github.com/manas0x" target="_blank" class="sidebar-icon" aria-label="GitHub">
      ${Icons.github}
    </a>
    <a href="https://linkedin.com/in/aroramanas01" target="_blank" class="sidebar-icon" aria-label="LinkedIn">
      ${Icons.linkedin}
    </a>
    <a href="mailto:aroramanas01@gmail.com" class="sidebar-icon" aria-label="Email">
      ${Icons.mail}
    </a>
  </div>

  <a href="/Resume.pdf" download="Resume.pdf" class="resume-button-fixed">
    ${Icons.download} <span>Resume</span>
  </a>

  <main>
    <section class="hero-section">
      <div class="hero-content">
        <span class="hero-eyebrow">Hello, I'm Manas Arora</span>
        <h1 class="hero-title">
          Building the <span class="text-gradient">Unknown</span>,<br>
          One Line at a Time.
        </h1>
        <p class="hero-subtitle">
          A B.Tech student at DIT University. 
          I engineer full-stack solutions and explore the depths of creative coding.
        </p>
        <div class="cta-group">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="#contact" class="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
      </div>
      <div class="about-grid">
        <div class="about-text">
          <p>
            I am a passionate developer with a knack for building robust web applications and solving complex problems. 
            Currently pursuing my B.Tech at DIT University, I spend my time mastering new technologies and contributing to open source.
          </p>
          <p>
            My specialized areas include Full Stack Development and Cloud Infrastructure. 
            I believe in code that is not just functional, but also beautiful.
          </p>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">20+</span>
            <span class="stat-label">Projects Built</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">3+</span>
            <span class="stat-label">Years Coding</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">100%</span>
            <span class="stat-label">Commitment</span>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-header">
        <h2 class="section-title">Selected Works</h2>
        <p style="color: var(--text-muted); font-size: 1.1rem;">A collection of my best repositories and experiments.</p>
      </div>
      <div class="projects-grid" id="projects-grid">
         <!-- Projects injected here -->
      </div>
    </section>

    <section id="contact" class="footer-section">
      <div class="footer-content">
        <h2>Let's Build Something Amazing</h2>
        <div class="footer-cta">
          <p>Have a project in mind or just want to say hi?</p>
          <a href="mailto:aroramanas01@gmail.com" class="btn btn-primary footer-email-btn">
            Say Hello
          </a>
        </div>
        

      </div>
      
      <div class="footer-bottom">
        <span>© 2026 Manas Arora. All rights reserved.</span>
        <span>Designed & Built with ❤️</span>
      </div>
    </section>
  </main>
`

document.querySelector('#app').innerHTML = htmlContent

// --- Logic & Animations ---

// 1. Cursor Follower (Refined to be hidden when mouse leaves window)
const cursor = document.getElementById('cursor')
let mouseX = -100, mouseY = -100
let cursorX = -100, cursorY = -100

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  cursor.style.opacity = 1

  const target = e.target
  // Added sidebar-icon to hover targets
  if (target.closest('a') || target.closest('button') || target.closest('.project-card') || target.closest('.sidebar-icon')) {
    cursor.classList.add('hovered')
  } else {
    cursor.classList.remove('hovered')
  }
})

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0
})

gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio())
  cursorX += (mouseX - cursorX) * dt
  cursorY += (mouseY - cursorY) * dt
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`
})

// 2. Header Scroll Effect (Capsule width adjustment?)
// We can keep the simple scroll class toggle for background blur

const header = document.querySelector('header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// 3. Hero Animations
const tl = gsap.timeline()
tl.from('.social-sidebar > *', {
  x: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: 'power3.out'
})

  .from('.hero-content > *', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power4.out',
  }, "-=0.6")

// 4. Projects Fetch
const PROJECTS_CONTAINER = document.getElementById('projects-grid')
const GITHUB_USER = 'manas0x'

async function loadProjects() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=9`)
    if (!res.ok) throw new Error('GitHub API Error')
    const repos = await res.json()

    // Sort by stars for "best" works, but keep recent push consideration? 
    // Let's mix: sort by stars descending
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count)

    // Filter out specific projects based on user request
    const filteredRepos = repos.filter(repo => {
      const name = repo.name.toLowerCase()
      // Filter out 'manas0x' (profile repo) and anything containing 'noregister'
      if (name === 'manas0x') return false
      if (name.includes('noregister')) return false
      return true
    })

    renderProjects(filteredRepos)
  } catch (e) {
    console.error(e)
    PROJECTS_CONTAINER.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Unable to load projects. View on <a href="https://github.com/${GITHUB_USER}" style="color: var(--primary)">GitHub</a></p>`
  }
}

function renderProjects(repos) {
  PROJECTS_CONTAINER.innerHTML = ''

  repos.forEach((repo, i) => {
    // Convert to div wrapper instead of anchor to allow multiple links
    const card = document.createElement('div')
    card.className = 'project-card'

    // Basic formatting
    const desc = repo.description || 'No description provided.'
    const indexStr = (i + 1).toString().padStart(2, '0')

    // Logic for Live URL: Use GitHub homepage, but override for invoiceflow as requested
    let liveUrl = repo.homepage
    if (repo.name.toLowerCase() === 'invoiceflow') {
      liveUrl = 'https://invoiceflow.manas0x.site/'
    }

    const hasHomepage = liveUrl && liveUrl.length > 0

    card.innerHTML = `
      <a href="${repo.html_url}" target="_blank" class="card-image-link" aria-label="View ${repo.name} on GitHub">
        <div class="card-image-placeholder" style="background: linear-gradient(${135 + i * 15}deg, var(--surface), var(--bg))">
           <div class="card-index">${indexStr}</div>
        </div>
      </a>
      <div class="card-content">
        <a href="${repo.html_url}" target="_blank" class="project-title-link">
          <h3 class="project-title">${repo.name}</h3>
        </a>
        <p class="project-desc">${desc.length > 80 ? desc.substring(0, 80) + '...' : desc}</p>
        
        <div class="tech-stack">
          <span class="tech-tag">${lang}</span>
          ${repo.topics ? repo.topics.slice(0, 2).map(t => `<span class="tech-tag">${t}</span>`).join('') : ''}
        </div>

        <div class="card-links">
          <div class="card-stat">
             ${Icons.star} <span>${repo.stargazers_count}</span>
          </div>
          <div class="card-stat">
             ${Icons.gitBranch} <span>${repo.forks_count}</span>
          </div>
          
          <div class="card-actions" style="margin-left: auto; display: flex; gap: 1rem;">
            <a href="${repo.html_url}" target="_blank" class="card-link action-link">
               Code ${Icons.github}
            </a>
            ${hasHomepage ? `
              <a href="${liveUrl}" target="_blank" class="card-link action-link live-link">
                 Live ${Icons.external}
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `
    PROJECTS_CONTAINER.appendChild(card)

    // Scroll Trigger Animation for each card
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  })
}

loadProjects()

// 5. Section Title Animations
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 85%',
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
})
