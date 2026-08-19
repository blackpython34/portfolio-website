/* ==========================================================================
   SARNENDU DAS — PORTFOLIO SCRIPT (MAX DEVICE COMPATIBILITY & DYNAMIC FLUID ENGINE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       00. CINEMATIC INTRO VIDEO REVEAL OVERLAY & CANVAS STREAM ENGINE
       ---------------------------------------------------------------------- */
    const introOverlay = document.getElementById('intro-overlay');
    const introCanvas = document.getElementById('intro-video-canvas');
    const progressBar = document.getElementById('intro-progress-bar');
    const percentEl = document.getElementById('intro-percent');
    const loadingTextEl = document.getElementById('intro-loading-text');
    const skipBtn = document.getElementById('intro-skip-btn');

    let introActive = true;

    if (introCanvas && introOverlay) {
        const ctx = introCanvas.getContext('2d');
        let width = introCanvas.width = window.innerWidth;
        let height = introCanvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            if (introActive) {
                width = introCanvas.width = window.innerWidth;
                height = introCanvas.height = window.innerHeight;
            }
        });

        // Dynamic High-Refresh Rate Cybernetic Grid & Particle Stream
        const gridCols = 30;
        const gridRows = 20;
        let scanLineY = 0;
        const streamParticles = [];

        for (let i = 0; i < 60; i++) {
            streamParticles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                speed: Math.random() * 4 + 2,
                len: Math.random() * 80 + 20,
                alpha: Math.random() * 0.7 + 0.3
            });
        }

        let lastIntroTime = performance.now();
        function renderIntroVideoCanvas(now) {
            if (!introActive) return;

            const currentTime = now || performance.now();
            const dt = Math.min((currentTime - lastIntroTime) / (1000 / 60), 2.5);
            lastIntroTime = currentTime;

            ctx.fillStyle = 'rgba(7, 7, 9, 0.25)';
            ctx.fillRect(0, 0, width, height);

            // Draw Digital Grid
            ctx.strokeStyle = 'rgba(255, 43, 43, 0.08)';
            ctx.lineWidth = 1;
            const stepX = width / gridCols;
            const stepY = height / gridRows;

            for (let x = 0; x < width; x += stepX) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y < height; y += stepY) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Draw Digital Laser Streams (Frame-Rate Normalized)
            ctx.strokeStyle = 'rgba(255, 43, 43, 0.6)';
            streamParticles.forEach(p => {
                p.y += p.speed * dt;
                if (p.y > height) {
                    p.y = -p.len;
                    p.x = Math.random() * width;
                }

                const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.len);
                grad.addColorStop(0, 'rgba(255, 43, 43, 0)');
                grad.addColorStop(1, `rgba(255, 43, 43, ${p.alpha})`);

                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x, p.y + p.len);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            });

            // Draw Laser Scanning Beam
            scanLineY = (scanLineY + 3 * dt) % height;
            ctx.fillStyle = 'rgba(255, 43, 43, 0.15)';
            ctx.fillRect(0, scanLineY, width, 4);

            requestAnimationFrame(renderIntroVideoCanvas);
        }

        requestAnimationFrame(renderIntroVideoCanvas);

        // Progress counter animation
        let progress = 0;
        const statusMsgs = [
            "LOADING NEURAL CORE...",
            "OPTIMIZING GRAPHICS ENGINE (MAX COMPATIBILITY)...",
            "INITIALIZING DARK EDITORIAL FRAMEWORK...",
            "SYSTEM READY // REVEALING PORTFOLIO..."
        ];

        const progressInterval = setInterval(() => {
            progress += Math.floor(Math.random() * 8 + 4);
            if (progress > 100) progress = 100;

            if (progressBar) progressBar.style.width = `${progress}%`;
            if (percentEl) percentEl.textContent = `${progress}%`;

            if (loadingTextEl) {
                if (progress < 30) loadingTextEl.textContent = statusMsgs[0];
                else if (progress < 60) loadingTextEl.textContent = statusMsgs[1];
                else if (progress < 90) loadingTextEl.textContent = statusMsgs[2];
                else loadingTextEl.textContent = statusMsgs[3];
            }

            if (progress >= 100) {
                clearInterval(progressInterval);
                setTimeout(revealPortfolioSite, 300);
            }
        }, 80);

        function revealPortfolioSite() {
            if (!introActive) return;
            introActive = false;
            introOverlay.classList.add('hidden');
            document.body.style.overflow = '';
            
            // Trigger initial entrance reveals
            setTimeout(() => {
                const initialReveals = document.querySelectorAll('#hero .reveal-item');
                initialReveals.forEach(el => el.classList.add('revealed'));
            }, 200);
        }

        if (skipBtn) {
            skipBtn.addEventListener('click', () => {
                clearInterval(progressInterval);
                revealPortfolioSite();
            });
        }
    }

    /* ----------------------------------------------------------------------
       01. CUSTOM INTERACTIVE MOUSE CURSOR SYSTEM (MAX DEVICE COMPATIBILITY LERP)
       ---------------------------------------------------------------------- */
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = -100, mouseY = -100;
        let ringX = -100, ringY = -100;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        });

        // Frame-rate independent delta-time exponential dampening for ring lerp
        let lastRingTime = performance.now();
        function renderCursorRing(now) {
            const currentTime = now || performance.now();
            const delta = Math.min((currentTime - lastRingTime) / 1000, 0.1);
            lastRingTime = currentTime;

            const factor = 1 - Math.exp(-18 * delta);
            ringX += (mouseX - ringX) * factor;
            ringY += (mouseY - ringY) * factor;

            cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

            requestAnimationFrame(renderCursorRing);
        }
        requestAnimationFrame(renderCursorRing);

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .pill, .filter-btn, .card-hover, .social-btn, .back-to-top, .brand-logo, .view-project-btn, .open-resume-trigger, .intro-skip-btn');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
        });

        document.addEventListener('mousedown', () => cursorRing.classList.add('active'));
        document.addEventListener('mouseup', () => cursorRing.classList.remove('active'));
    }

    /* ----------------------------------------------------------------------
       02. AUTO-APPLY REVEAL ANIMATIONS TO EVERY FONT & TEXT ELEMENT
       ---------------------------------------------------------------------- */
    const allTextElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .metric-item, .info-cell, .skill-card, .project-card, .timeline-content, .edu-card, .channel-item, .form-group, .footer-left, .footer-badge');
    allTextElements.forEach((el, index) => {
        if (!el.classList.contains('reveal-item')) {
            el.classList.add('reveal-item');
            el.setAttribute('data-delay', (index % 5) * 80);
        }
    });

    /* ----------------------------------------------------------------------
       03. AMBIENT PARTICLES CANVAS (MAX DEVICE SPEED NORMALIZED)
       ---------------------------------------------------------------------- */
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const numParticles = Math.min(Math.floor(window.innerWidth / 22), 35);

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.6 + 0.6,
                color: Math.random() > 0.3 ? `rgba(255, 43, 43, ${Math.random() * 0.3 + 0.1})` : `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.05})`,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            });
        }

        let isUserScrolling = false;
        let scrollTimer;
        window.addEventListener('scroll', () => {
            isUserScrolling = true;
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                isUserScrolling = false;
            }, 120);
        }, { passive: true });

        let lastParticleTime = performance.now();
        function drawParticles(now) {
            if (isUserScrolling && window.innerWidth <= 768) {
                requestAnimationFrame(drawParticles);
                return;
            }

            const currentTime = now || performance.now();
            const dt = Math.min((currentTime - lastParticleTime) / (1000 / 60), 2.5);
            lastParticleTime = currentTime;

            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.x += p.vx * dt;
                p.y += p.vy * dt;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            requestAnimationFrame(drawParticles);
        }

        requestAnimationFrame(drawParticles);
    }

    /* ----------------------------------------------------------------------
       04. AMBIENT CURSOR GLOW EFFECT (MAX DEVICE COMPATIBILITY LERP)
       ---------------------------------------------------------------------- */
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        let lastGlowTime = performance.now();
        function animateCursorGlow(now) {
            const currentTime = now || performance.now();
            const delta = Math.min((currentTime - lastGlowTime) / 1000, 0.1);
            lastGlowTime = currentTime;

            const factor = 1 - Math.exp(-12 * delta);
            glowX += (mouseX - glowX) * factor;
            glowY += (mouseY - glowY) * factor;

            cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;

            requestAnimationFrame(animateCursorGlow);
        }

        requestAnimationFrame(animateCursorGlow);
    }

    /* ----------------------------------------------------------------------
       05. FLUID SCROLL REVEAL OBSERVER & FONT ANIMATIONS
       ---------------------------------------------------------------------- */
    const revealItems = document.querySelectorAll('.reveal-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);

                const countUps = entry.target.querySelectorAll('.count-up');
                countUps.forEach(numEl => triggerCountUp(numEl));

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealItems.forEach(item => revealObserver.observe(item));

    function triggerCountUp(element) {
        if (element.classList.contains('counted')) return;
        element.classList.add('counted');
        
        const targetStr = element.getAttribute('data-target');
        if (!targetStr) return;

        const isFloat = targetStr.includes('.');
        const targetVal = parseFloat(targetStr);
        let startVal = 0;
        const duration = 1400;
        const startTime = performance.now();

        function animateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = startVal + (targetVal - startVal) * easeProgress;

            if (isFloat) {
                element.textContent = currentVal.toFixed(1);
            } else {
                element.textContent = Math.floor(currentVal) + (targetStr.includes('+') ? '+' : '');
            }

            if (progress < 1) {
                requestAnimationFrame(animateNumber);
            } else {
                element.textContent = targetStr + (element.textContent.includes('+') && !targetStr.includes('+') ? '+' : '');
            }
        }

        requestAnimationFrame(animateNumber);
    }

    /* ----------------------------------------------------------------------
       06. DYNAMIC TYPEWRITER EFFECT
       ---------------------------------------------------------------------- */
    const typewriterElement = document.getElementById('hero-typewriter');
    if (typewriterElement) {
        const titles = [
            'FULL-STACK ENGINEER',
            'AI & ML ARCHITECT',
            'NEXT.JS 14 SPECIALIST',
            'DATA ANALYTICS ENTHUSIAST'
        ];
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 90;

        function type() {
            const currentTitle = titles[titleIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 40;
            } else {
                typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 90;
            }

            if (!isDeleting && charIndex === currentTitle.length) {
                typingSpeed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                typingSpeed = 400;
            }

            setTimeout(type, typingSpeed);
        }

        type();
    }

    /* ----------------------------------------------------------------------
       07. HEADER SCROLL & NAV HIGHLIGHT
       ---------------------------------------------------------------------- */
    const header = document.getElementById('site-header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                if (scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                if (window.innerWidth > 768) {
                    let currentSectionId = '';
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop - 140;
                        const sectionHeight = section.offsetHeight;
                        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                            currentSectionId = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${currentSectionId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

    /* ----------------------------------------------------------------------
       08. MOBILE NAVIGATION MENU
       ---------------------------------------------------------------------- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
    mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    /* ----------------------------------------------------------------------
       09. SKILLS FILTERING TABS
       ---------------------------------------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-cat') === filterValue) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ----------------------------------------------------------------------
       10. INTERACTIVE LIVE TERMINAL
       ---------------------------------------------------------------------- */
    const terminalInput = document.getElementById('terminal-input');
    const terminalBody = document.getElementById('terminal-body');

    if (terminalInput && terminalBody) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = terminalInput.value.trim().toLowerCase();
                terminalInput.value = '';

                if (cmd === '') return;

                const promptLine = document.createElement('p');
                promptLine.innerHTML = `<span class="prompt">sarnendu@dev:~$</span> <span class="command">${escapeHtml(cmd)}</span>`;
                terminalBody.appendChild(promptLine);

                let responseHTML = '';
                switch (cmd) {
                    case 'help':
                        responseHTML = `<p style="color: #94A3B8;">Available commands:<br>
                        - <strong style="color: #38BDF8;">bio</strong> : View full academic & career summary<br>
                        - <strong style="color: #38BDF8;">skills</strong> : List top technical competencies<br>
                        - <strong style="color: #38BDF8;">projects</strong> : Display featured software projects<br>
                        - <strong style="color: #38BDF8;">education</strong> : Show double degree details<br>
                        - <strong style="color: #38BDF8;">contact</strong> : Get direct contact channels<br>
                        - <strong style="color: #38BDF8;">clear</strong> : Reset terminal output</p>`;
                        break;
                    case 'bio':
                        responseHTML = `<p style="color: #34D399;">Sarnendu Das — AI & Full-Stack Engineer<br>
                        Pursuing B.Tech CSE (AI & ML) at BCREC + B.Sc Computer Science at IIT Patna.<br>
                        CGPA: 8.7 / 10.0 (Sem 4) | Hack Zenith 2026 Winner (3rd Place)</p>`;
                        break;
                    case 'skills':
                        responseHTML = `<p style="color: #FDE047;">Tech Stack: Next.js 14, Python, React, TypeScript, C++, Firebase, Cloud Firestore, SQL, Tailwind CSS, DSA & Algorithms.</p>`;
                        break;
                    case 'projects':
                        responseHTML = `<p style="color: #38BDF8;">1. Durgapur Local Services Finder (Next.js 14, Firebase)<br>
                        2. Smart Expense Tracker (JS, Tailwind)<br>
                        3. Responsive Restaurant Web App (Flexbox, JS)<br>
                        4. Task Manager SPA (LocalStorage API)</p>`;
                        break;
                    case 'education':
                        responseHTML = `<p style="color: #A7F3D0;">- B.Tech CSE (AI & ML) — BCREC (2024-Present)<br>- B.Sc CS & Data Analytics — IIT Patna (2024-Present)<br>- Class XII (CBSE): 86.0% | Class X (ICSE): 92.4%</p>`;
                        break;
                    case 'contact':
                        responseHTML = `<p style="color: #FF2B2B;">Email: sarnendudas923@gmail.com<br>Location: Bankura / Durgapur, West Bengal, India<br>GitHub: https://github.com/blackpython34</p>`;
                        break;
                    case 'clear':
                        terminalBody.innerHTML = `
                            <p><span class="prompt">sarnendu@dev:~$</span> <span class="command">cat bio.json</span></p>
                            <pre class="terminal-json">{
  <span class="json-key">"name"</span>: <span class="json-val">"Sarnendu Das"</span>,
  <span class="json-key">"education"</span>: [
    <span class="json-val">"IIT Patna (B.Sc CS & Data Analytics)"</span>,
    <span class="json-val">"BCREC (B.Tech CSE - AI & ML)"</span>
  ],
  <span class="json-key">"cgpa"</span>: <span class="json-num">8.7</span>,
  <span class="json-key">"coreStack"</span>: [<span class="json-val">"Next.js 14"</span>, <span class="json-val">"Python"</span>, <span class="json-val">"Firebase"</span>, <span class="json-val">"C++"</span>],
  <span class="json-key">"availability"</span>: <span class="json-val">"Open for Internships & Software Engineer Roles"</span>
}</pre>
                            <p><span class="prompt">sarnendu@dev:~$</span> <span class="command">npm test -- --suite=projects</span></p>
                            <p class="terminal-success">✔ 4 core production apps passed with 100% code coverage</p>
                            <p><span class="prompt">sarnendu@dev:~$</span> <span class="command">type 'help' or 'skills'</span><span class="cursor-blink">▌</span></p>`;
                        return;
                    default:
                        responseHTML = `<p style="color: #FF5F56;">command not found: ${escapeHtml(cmd)}. Type '<span style="color: #38BDF8;">help</span>' for available commands.</p>`;
                }

                const respContainer = document.createElement('div');
                respContainer.innerHTML = responseHTML;
                terminalBody.appendChild(respContainer);
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        });
    }

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    /* ----------------------------------------------------------------------
       11. RESUME PDF MODAL
       ---------------------------------------------------------------------- */
    const resumeTriggers = document.querySelectorAll('.open-resume-trigger');
    const resumeModal = document.getElementById('resume-modal');
    const closeResumeModal = document.getElementById('close-resume-modal');

    function openResumeModal() {
        if (resumeModal) {
            resumeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function hideResumeModal() {
        if (resumeModal) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    resumeTriggers.forEach(btn => btn.addEventListener('click', openResumeModal));
    if (closeResumeModal) closeResumeModal.addEventListener('click', hideResumeModal);
    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) hideResumeModal();
        });
    }

    /* ----------------------------------------------------------------------
       12. PROJECT DETAILS MODAL
       ---------------------------------------------------------------------- */
    const projectTriggers = document.querySelectorAll('.view-project-btn');
    const projectModal = document.getElementById('project-modal');
    const closeProjectModal = document.getElementById('close-project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalBody = document.getElementById('modal-project-body');

    const projectData = {
        p1: {
            title: "Durgapur Local Services Finder",
            tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Firebase Auth", "Cloud Firestore"],
            desc: "Full-stack web application optimizing discovery workflows for verified local service providers in Durgapur, India.",
            features: [
                "User authentication & session persistent login via Firebase Auth.",
                "Real-time search and filter logic across verified service listings.",
                "Cloud Firestore integration for dynamic data retrieval and provider profiles.",
                "Responsive dark layout with mobile-first UI optimization."
            ],
            github: "https://github.com/blackpython34"
        },
        p2: {
            title: "Smart Expense Tracker",
            tech: ["HTML5", "Tailwind CSS", "JavaScript", "LocalStorage API"],
            desc: "Personal finance tracking dashboard designed for intuitive expense logging and budget management.",
            features: [
                "Automated expense category tagging and total balance calculations.",
                "Browser LocalStorage integration for persistent data across sessions.",
                "Dynamic interactive charts and list management.",
                "Clean dark-mode dashboard interface."
            ],
            github: "https://github.com/blackpython34"
        },
        p3: {
            title: "Responsive Restaurant Website",
            tech: ["HTML5", "CSS3", "Flexbox", "JavaScript"],
            desc: "Modern restaurant landing page engineered for high visual fidelity and mobile accessibility.",
            features: [
                "Interactive food menu modal with category filters.",
                "Online reservation table booking form validation.",
                "CSS Flexbox layout structure with zero horizontal overflow.",
                "Smooth scroll navigation."
            ],
            github: "https://github.com/blackpython34"
        },
        p4: {
            title: "To-Do Web Application",
            tech: ["HTML5", "CSS3", "JavaScript", "Web Storage API"],
            desc: "Single Page Application (SPA) task management tool supporting CRUD operations.",
            features: [
                "Full CRUD capabilities (Create, Read, Update, Delete tasks).",
                "Priority tagging (High, Medium, Low) with visual indicator pills.",
                "Filter tasks by status (All, Active, Completed).",
                "LocalStorage browser persistence."
            ],
            github: "https://github.com/blackpython34"
        }
    };

    projectTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const pId = btn.getAttribute('data-project');
            const data = projectData[pId];
            if (data && projectModal) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = `
                    <div class="modal-project-content">
                        <p style="font-size: 1rem; color: #9FA0AE; line-height: 1.6;">${data.desc}</p>
                        
                        <div class="modal-project-tech">
                            ${data.tech.map(t => `<span>${t}</span>`).join('')}
                        </div>

                        <div class="modal-project-section">
                            <h4>KEY IMPLEMENTATION HIGHLIGHTS</h4>
                            <ul>
                                ${data.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>

                        <div style="display: flex; gap: 16px; margin-top: 12px;">
                            <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-red btn-sm">
                                <i class="fa-brands fa-github"></i> VIEW SOURCE CODE
                            </a>
                        </div>
                    </div>
                `;
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeProjectModal) {
        closeProjectModal.addEventListener('click', () => {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /* ----------------------------------------------------------------------
       13. COPY EMAIL TO CLIPBOARD
       ---------------------------------------------------------------------- */
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'sarnendudas923@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const origIcon = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = `<i class="fa-solid fa-check" style="color: #34D399;"></i>`;
                setTimeout(() => {
                    copyEmailBtn.innerHTML = origIcon;
                }, 2000);
            });
        });
    }

    /* ----------------------------------------------------------------------
       14. CONTACT FORM SUBMISSION
       ---------------------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-form-btn');
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> SENDING...`;
            
            setTimeout(() => {
                submitBtn.innerHTML = `<span>MESSAGE SENT!</span> <i class="fa-solid fa-check"></i>`;
                formStatus.className = 'form-status-msg success';
                formStatus.textContent = 'Thank you! Your message has been sent successfully. Sarnendu will get back to you shortly.';
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.innerHTML = `<span>SEND MESSAGE</span> <i class="fa-solid fa-paper-plane"></i>`;
                }, 4000);
            }, 1200);
        });
    }

    /* ----------------------------------------------------------------------
       15. BACK TO TOP BUTTON
       ---------------------------------------------------------------------- */
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
