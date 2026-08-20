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

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .pill, .filter-btn, .card-hover, .social-btn, .back-to-top, .brand-logo, .view-project-btn, .view-cert-btn, .open-resume-trigger, .intro-skip-btn');

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
       03B. DYNAMIC REFRESH RATE ANIMATED BACKGROUND VIDEO ENGINE
       ---------------------------------------------------------------------- */
    const bgVideo = document.getElementById('bg-video');
    const bgCanvas = document.getElementById('bg-video-canvas');

    if (bgCanvas) {
        const bgCtx = bgCanvas.getContext('2d');
        let bgWidth = bgCanvas.width = window.innerWidth;
        let bgHeight = bgCanvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            bgWidth = bgCanvas.width = window.innerWidth;
            bgHeight = bgCanvas.height = window.innerHeight;
        });

        // 3D Cyber Mesh & Dynamic Animated Energy Stream Loop
        const linesCount = 18;
        let angleOffset = 0;
        const cyberBeams = [];

        for (let i = 0; i < 45; i++) {
            cyberBeams.push({
                x: Math.random() * bgWidth,
                y: Math.random() * bgHeight,
                len: Math.random() * 160 + 60,
                speed: Math.random() * 2.8 + 1.2,
                opacity: Math.random() * 0.5 + 0.15,
                width: Math.random() * 2.5 + 1.0,
                color: Math.random() > 0.3 ? '255, 43, 43' : '56, 189, 248'
            });
        }

        let lastBgTime = performance.now();

        function renderBgVideoCanvas(now) {
            const currentTime = now || performance.now();
            // Dynamic refresh rate frame delta scaling (60Hz to 240Hz dynamic adapt)
            const deltaMs = currentTime - lastBgTime;
            const dt = Math.min(deltaMs / (1000 / 60), 3.0);
            lastBgTime = currentTime;

            bgCtx.clearRect(0, 0, bgWidth, bgHeight);

            // 1. Dynamic Pulsing Radial Energy Glow
            angleOffset += 0.012 * dt;
            const pulseRadius = Math.sin(angleOffset * 0.8) * 110 + (bgWidth * 0.38);
            
            const grad = bgCtx.createRadialGradient(
                bgWidth / 2, bgHeight / 2, 20,
                bgWidth / 2, bgHeight / 2, Math.max(pulseRadius, 120)
            );
            grad.addColorStop(0, 'rgba(255, 43, 43, 0.12)');
            grad.addColorStop(0.4, 'rgba(255, 43, 43, 0.04)');
            grad.addColorStop(0.8, 'rgba(15, 15, 22, 0.02)');
            grad.addColorStop(1, 'rgba(7, 7, 9, 0)');

            bgCtx.fillStyle = grad;
            bgCtx.fillRect(0, 0, bgWidth, bgHeight);

            // 2. Continuous Upward Cybernetic Laser Stream Beams
            cyberBeams.forEach(beam => {
                beam.y -= beam.speed * dt;
                if (beam.y + beam.len < 0) {
                    beam.y = bgHeight + beam.len;
                    beam.x = Math.random() * bgWidth;
                }

                const beamGrad = bgCtx.createLinearGradient(beam.x, beam.y, beam.x, beam.y - beam.len);
                beamGrad.addColorStop(0, `rgba(${beam.color}, 0)`);
                beamGrad.addColorStop(0.5, `rgba(${beam.color}, ${beam.opacity})`);
                beamGrad.addColorStop(1, `rgba(${beam.color}, 0)`);

                bgCtx.beginPath();
                bgCtx.moveTo(beam.x, beam.y);
                bgCtx.lineTo(beam.x, beam.y - beam.len);
                bgCtx.strokeStyle = beamGrad;
                bgCtx.lineWidth = beam.width;
                bgCtx.stroke();
            });

            // 3. Dynamic Wave Grid Overlay
            bgCtx.strokeStyle = 'rgba(255, 43, 43, 0.06)';
            bgCtx.lineWidth = 1;

            const step = bgHeight / linesCount;
            for (let i = 0; i < linesCount; i++) {
                const y = i * step + (Math.sin(angleOffset + i * 0.45) * 12);
                bgCtx.beginPath();
                bgCtx.moveTo(0, y);
                bgCtx.quadraticCurveTo(bgWidth / 2, y + Math.cos(angleOffset + i * 0.35) * 24, bgWidth, y);
                bgCtx.stroke();
            }

            requestAnimationFrame(renderBgVideoCanvas);
        }

        requestAnimationFrame(renderBgVideoCanvas);

        // Pipe animated stream directly into <video id="bg-video"> if no physical video file is attached
        if (bgVideo && typeof bgCanvas.captureStream === 'function') {
            try {
                const videoStream = bgCanvas.captureStream(60);
                bgVideo.srcObject = videoStream;
                bgVideo.play().catch(() => {});
            } catch (e) {
                // Fallback handling
            }
        }
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
                        - <strong style="color: #38BDF8;">certifications</strong> : View verified technical certificates<br>
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
                    case 'certifications':
                    case 'certs':
                        responseHTML = `<p style="color: #F472B6;">1. Build with AI (Solution Challenge 2026) — Google Cloud & Hack2Skill<br>
                        2. Software Engineering Job Simulation — Forage (Jan 28, 2026)<br>
                        3. Hack Zenith 2025 (2nd Runner Up / 3rd Place) — GDG On Campus (Team Pixel Pioneers)</p>`;
                        break;
                    case 'contact':
                        responseHTML = `<p style="color: #FF2B2B;">Email: sarnendudas923@gmail.com<br>Location: Bankura / Durgapur, West Bengal, India<br>GitHub: https://github.com/blackpython34<br>LinkedIn: https://linkedin.com/in/sarnendu-das<br>Instagram: https://instagram.com/lavender_gray17/</p>`;
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
       12B. CERTIFICATE PDF VIEWER MODAL
       ---------------------------------------------------------------------- */
    const certTriggers = document.querySelectorAll('.view-cert-btn');
    const certModal = document.getElementById('cert-modal');
    const closeCertModal = document.getElementById('close-cert-modal');
    const modalCertTitle = document.getElementById('modal-cert-title');
    const certIframe = document.getElementById('cert-iframe');
    const modalCertDownload = document.getElementById('modal-cert-download');
    const modalCertOpenTab = document.getElementById('modal-cert-opentab');

    certTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const certUrl = btn.getAttribute('data-cert');
            const title = btn.getAttribute('data-title') || 'CERTIFICATE VIEWER';

            if (certModal && certIframe) {
                if (modalCertTitle) modalCertTitle.textContent = title;
                certIframe.src = certUrl;

                const filename = certUrl.substring(certUrl.lastIndexOf('/') + 1);
                if (modalCertDownload) {
                    modalCertDownload.href = certUrl;
                    modalCertDownload.download = filename;
                }
                if (modalCertOpenTab) {
                    modalCertOpenTab.href = certUrl;
                }

                certModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function hideCertModal() {
        if (certModal) {
            certModal.classList.remove('active');
            if (certIframe) certIframe.src = '';
            document.body.style.overflow = '';
        }
    }

    if (closeCertModal) closeCertModal.addEventListener('click', hideCertModal);
    if (certModal) {
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) hideCertModal();
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
       14. TOAST NOTIFICATION ENGINE
       ---------------------------------------------------------------------- */
    function showToast(title, desc, type = 'success', duration = 4500) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        let iconClass = 'fa-circle-check';
        if (type === 'error') iconClass = 'fa-circle-exclamation';
        if (type === 'info') iconClass = 'fa-circle-info';

        toast.innerHTML = `
            <i class="fa-solid ${iconClass} toast-icon"></i>
            <div class="toast-body">
                <div class="toast-title">${escapeHtml(title)}</div>
                <div class="toast-desc">${escapeHtml(desc)}</div>
            </div>
            <button class="toast-close" aria-label="Close Toast">&times;</button>
        `;

        container.appendChild(toast);

        const closeBtn = toast.querySelector('.toast-close');
        let dismissTimer = setTimeout(dismissToast, duration);

        function dismissToast() {
            clearTimeout(dismissTimer);
            toast.classList.add('toast-hiding');
            setTimeout(() => toast.remove(), 400);
        }

        if (closeBtn) closeBtn.addEventListener('click', dismissToast);
    }

    /* ----------------------------------------------------------------------
       15. RESPONSE SYSTEM DATA & LOCAL STORAGE DATABASE
       ---------------------------------------------------------------------- */
    const RESPONSE_STORAGE_KEY = 'sarnendu_portfolio_responses';
    const WEB3FORMS_ACCESS_KEY = '16975e32-7f70-4104-a8aa-c69534e52a28';

    function getStoredResponses() {
        try {
            const stored = localStorage.getItem(RESPONSE_STORAGE_KEY);
            if (stored) return JSON.parse(stored);
        } catch (e) {
            console.error('Error reading responses from localStorage', e);
        }

        // Initial Seed Data if empty
        const seed = [
            {
                id: 'RESP-9041',
                name: 'Priya Sharma',
                email: 'priya.sharma@techrecruiters.co.in',
                subject: 'Software Engineering Internship Opportunity',
                message: 'Hi Sarnendu, We reviewed your portfolio and were very impressed with your dual-degree work at IIT Patna and BCREC as well as your Hack Zenith win. We have an opening for a Full-Stack Engineering Intern position. Let us know if you are interested in discussing details.',
                timestamp: new Date(Date.now() - 3600000 * 24).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
                unread: true,
                starred: true
            },
            {
                id: 'RESP-8120',
                name: 'Arjun Roy',
                email: 'arjun.roy@hackathon-org.in',
                subject: 'Hack Zenith 2026 Winner Showcase & Tech Talk',
                message: 'Congratulations on securing 3rd place in Hack Zenith 2026! We would love to feature your project in our upcoming tech showcase newsletter and invite you to present a 15-min talk on Next.js 14 architecture.',
                timestamp: new Date(Date.now() - 3600000 * 72).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
                unread: false,
                starred: false
            }
        ];

        saveStoredResponses(seed);
        return seed;
    }

    function saveStoredResponses(responses) {
        try {
            localStorage.setItem(RESPONSE_STORAGE_KEY, JSON.stringify(responses));
            updateInboxBadge();
        } catch (e) {
            console.error('Error saving responses to localStorage', e);
        }
    }

    function updateInboxBadge() {
        const responses = getStoredResponses();
        const unreadCount = responses.filter(r => r.unread).length;
        const badgeEl = document.getElementById('inbox-badge');
        const totalPill = document.getElementById('inbox-total-pill');

        if (badgeEl) {
            badgeEl.textContent = unreadCount;
            if (unreadCount > 0) {
                badgeEl.style.display = 'inline-block';
            } else {
                badgeEl.style.display = 'none';
            }
        }

        if (totalPill) {
            totalPill.textContent = `${responses.length} Message${responses.length === 1 ? '' : 's'} (${unreadCount} New)`;
        }
    }

    // Initialize badge on page load
    updateInboxBadge();

    /* ----------------------------------------------------------------------
       16. CONTACT FORM REAL-TIME VALIDATION & SUBMISSION ENGINE
       ---------------------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const subjectInput = document.getElementById('form-subject');
        const messageInput = document.getElementById('form-message');

        function clearFieldError(inputEl, errorElId) {
            const group = inputEl.closest('.form-group');
            if (group) group.classList.remove('has-error');
            const errEl = document.getElementById(errorElId);
            if (errEl) errEl.textContent = '';
        }

        function setFieldError(inputEl, errorElId, msg) {
            const group = inputEl.closest('.form-group');
            if (group) group.classList.add('has-error');
            const errEl = document.getElementById(errorElId);
            if (errEl) errEl.textContent = msg;
        }

        [
            { input: nameInput, err: 'error-name' },
            { input: emailInput, err: 'error-email' },
            { input: subjectInput, err: 'error-subject' },
            { input: messageInput, err: 'error-message' }
        ].forEach(item => {
            if (item.input) {
                item.input.addEventListener('input', () => clearFieldError(item.input, item.err));
            }
        });

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            let isValid = true;
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!name || name.length < 2) {
                setFieldError(nameInput, 'error-name', 'Please enter your name (at least 2 characters).');
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                setFieldError(emailInput, 'error-email', 'Please enter a valid email address.');
                isValid = false;
            }

            if (!subject || subject.length < 3) {
                setFieldError(subjectInput, 'error-subject', 'Please enter a subject (at least 3 characters).');
                isValid = false;
            }

            if (!message || message.length < 5) {
                setFieldError(messageInput, 'error-message', 'Please enter a message (at least 5 characters).');
                isValid = false;
            }

            if (!isValid) {
                showToast('Validation Error', 'Please correct the highlighted fields before sending.', 'error');
                return;
            }

            const submitBtn = document.getElementById('submit-form-btn');
            const originalBtnHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> SENDING RESPONSE...`;
            submitBtn.disabled = true;

            // Construct Response Record
            const newResponse = {
                id: 'RESP-' + Math.floor(1000 + Math.random() * 9000),
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
                unread: true,
                starred: false
            };

            // Save to LocalStorage Database
            const responses = getStoredResponses();
            responses.unshift(newResponse);
            saveStoredResponses(responses);

            // Attempt Delivery via Web3Forms API Endpoint if key configured or fallback gracefully
            if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
                try {
                    const formData = new FormData();
                    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
                    formData.append('name', name);
                    formData.append('email', email);
                    formData.append('subject', `[Portfolio Contact] ${subject}`);
                    formData.append('message', message);

                    fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    }).catch(() => {});
                } catch (err) {}
            }

            setTimeout(() => {
                submitBtn.innerHTML = `<span>MESSAGE SENT!</span> <i class="fa-solid fa-check"></i>`;
                submitBtn.disabled = false;

                if (formStatus) {
                    formStatus.className = 'form-status-msg success';
                    formStatus.textContent = '✔ Thank you! Your response has been logged & routed to Sarnendu.';
                }

                showToast('Message Received!', `Thank you ${name}. Your message has been logged into the Response System.`, 'success');

                contactForm.reset();

                // Refresh Inbox if modal is open
                if (typeof renderInboxList === 'function') renderInboxList();

                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnHTML;
                }, 4000);
            }, 1000);
        });
    }

    /* ----------------------------------------------------------------------
       17. INBOX MODAL & RESPONSE MANAGEMENT SYSTEM CONTROLLER
       ---------------------------------------------------------------------- */
    const responsesModal = document.getElementById('responses-modal');
    const openInboxBtn = document.getElementById('open-inbox-btn');
    const closeResponsesModal = document.getElementById('close-responses-modal');
    const inboxSearchInput = document.getElementById('inbox-search-input');
    const inboxFilterTabs = document.querySelectorAll('.inbox-tab');
    const inboxMessageList = document.getElementById('inbox-message-list');
    const inboxDetailView = document.getElementById('inbox-detail-view');
    const exportResponsesBtn = document.getElementById('export-responses-btn');
    const clearResponsesBtn = document.getElementById('clear-responses-btn');

    let currentFilter = 'all';
    let searchQuery = '';
    let selectedMsgId = null;

    function openInboxModal() {
        if (responsesModal) {
            updateInboxBadge();
            renderInboxList();
            responsesModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeInboxModal() {
        if (responsesModal) {
            responsesModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Expose openInboxModal globally for terminal invocation
    window.openInboxModal = openInboxModal;

    if (openInboxBtn) openInboxBtn.addEventListener('click', openInboxModal);
    if (closeResponsesModal) closeResponsesModal.addEventListener('click', closeInboxModal);
    if (responsesModal) {
        responsesModal.addEventListener('click', (e) => {
            if (e.target === responsesModal) closeInboxModal();
        });
    }

    // Search & Filter Listeners
    if (inboxSearchInput) {
        inboxSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderInboxList();
        });
    }

    inboxFilterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            inboxFilterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.getAttribute('data-filter');
            renderInboxList();
        });
    });

    function renderInboxList() {
        if (!inboxMessageList) return;

        let responses = getStoredResponses();

        // Filter by tab
        if (currentFilter === 'unread') {
            responses = responses.filter(r => r.unread);
        } else if (currentFilter === 'starred') {
            responses = responses.filter(r => r.starred);
        }

        // Filter by search query
        if (searchQuery) {
            responses = responses.filter(r => 
                r.name.toLowerCase().includes(searchQuery) ||
                r.email.toLowerCase().includes(searchQuery) ||
                r.subject.toLowerCase().includes(searchQuery) ||
                r.message.toLowerCase().includes(searchQuery)
            );
        }

        if (responses.length === 0) {
            inboxMessageList.innerHTML = `
                <div class="empty-inbox-state">
                    <i class="fa-solid fa-inbox"></i>
                    <h4>No Messages Found</h4>
                    <p>No contact messages match your current filter or search query.</p>
                </div>
            `;
            if (inboxDetailView) {
                inboxDetailView.innerHTML = `
                    <div class="empty-inbox-state">
                        <i class="fa-solid fa-envelope-open-text"></i>
                        <h4>Select a Message</h4>
                        <p>Choose a response from the inbox list on the left to view complete details.</p>
                    </div>
                `;
            }
            return;
        }

        // Auto-select first message if none selected or selected is not in filtered list
        if (!selectedMsgId || !responses.some(r => r.id === selectedMsgId)) {
            selectedMsgId = responses[0].id;
        }

        inboxMessageList.innerHTML = responses.map(msg => `
            <div class="message-item ${msg.unread ? 'unread' : ''} ${msg.id === selectedMsgId ? 'active' : ''}" data-id="${msg.id}">
                <div class="msg-item-top">
                    <span class="msg-sender-name">${escapeHtml(msg.name)}</span>
                    <span class="msg-timestamp">${escapeHtml(msg.timestamp.split(',')[0])}</span>
                </div>
                <div class="msg-subject">${escapeHtml(msg.subject)}</div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="msg-preview">${escapeHtml(msg.message.substring(0, 45))}...</span>
                    <button class="msg-star-btn ${msg.starred ? 'starred' : ''}" data-id="${msg.id}" title="Star message">
                        <i class="${msg.starred ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                    </button>
                </div>
            </div>
        `).join('');

        // Attach click events for message selection and star toggle
        inboxMessageList.querySelectorAll('.message-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.closest('.msg-star-btn')) return;
                const id = item.getAttribute('data-id');
                selectMessage(id);
            });
        });

        inboxMessageList.querySelectorAll('.msg-star-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                toggleStarMessage(id);
            });
        });

        renderSelectedMessageDetail();
    }

    function selectMessage(id) {
        selectedMsgId = id;
        const responses = getStoredResponses();
        const msg = responses.find(r => r.id === id);
        if (msg && msg.unread) {
            msg.unread = false;
            saveStoredResponses(responses);
        }
        renderInboxList();
    }

    function toggleStarMessage(id) {
        const responses = getStoredResponses();
        const msg = responses.find(r => r.id === id);
        if (msg) {
            msg.starred = !msg.starred;
            saveStoredResponses(responses);
            renderInboxList();
        }
    }

    function renderSelectedMessageDetail() {
        if (!inboxDetailView) return;

        const responses = getStoredResponses();
        const msg = responses.find(r => r.id === selectedMsgId);

        if (!msg) {
            inboxDetailView.innerHTML = `
                <div class="empty-inbox-state">
                    <i class="fa-solid fa-envelope-open-text"></i>
                    <h4>Select a Message</h4>
                    <p>Choose a message from the inbox sidebar to read details.</p>
                </div>
            `;
            return;
        }

        const initials = msg.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'U';

        inboxDetailView.innerHTML = `
            <div class="detail-header">
                <h3 class="detail-subject">${escapeHtml(msg.subject)}</h3>
                <div class="detail-meta-row">
                    <div class="detail-sender-info">
                        <div class="avatar-circle">${initials}</div>
                        <div class="sender-name-email">
                            <h4>${escapeHtml(msg.name)}</h4>
                            <a href="mailto:${escapeHtml(msg.email)}">${escapeHtml(msg.email)}</a>
                        </div>
                    </div>
                    <div class="detail-actions">
                        <button class="btn btn-red btn-sm" id="reply-msg-btn">
                            <i class="fa-solid fa-reply"></i> REPLY
                        </button>
                        <button class="btn btn-outline btn-sm" id="toggle-read-btn">
                            <i class="fa-regular fa-envelope"></i> MARK UNREAD
                        </button>
                        <button class="btn btn-outline btn-sm" id="delete-msg-btn" style="color: #EF4444; border-color: rgba(239,68,68,0.4);">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
                <div style="margin-top: 10px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                    Received: ${escapeHtml(msg.timestamp)} • Record ID: ${escapeHtml(msg.id)}
                </div>
            </div>
            <div class="detail-body">${escapeHtml(msg.message)}</div>
        `;

        // Reply button trigger
        const replyBtn = document.getElementById('reply-msg-btn');
        if (replyBtn) {
            replyBtn.addEventListener('click', () => {
                const mailtoUrl = `mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(`Hi ${msg.name},\n\nThank you for reaching out.\n\nBest regards,\nSarnendu Das`)}`;
                window.location.href = mailtoUrl;
            });
        }

        // Toggle unread
        const toggleReadBtn = document.getElementById('toggle-read-btn');
        if (toggleReadBtn) {
            toggleReadBtn.addEventListener('click', () => {
                msg.unread = true;
                saveStoredResponses(responses);
                renderInboxList();
                showToast('Marked Unread', 'Message status updated to unread.', 'info');
            });
        }

        // Delete message
        const deleteBtn = document.getElementById('delete-msg-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                const updated = responses.filter(r => r.id !== msg.id);
                saveStoredResponses(updated);
                selectedMsgId = null;
                renderInboxList();
                showToast('Message Deleted', 'Response entry removed from database.', 'info');
            });
        }
    }

    // Export Responses
    if (exportResponsesBtn) {
        exportResponsesBtn.addEventListener('click', () => {
            const responses = getStoredResponses();
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(responses, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `sarnendu_portfolio_responses_${Date.now()}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast('Exported Responses', 'Response log downloaded as JSON file.', 'success');
        });
    }

    // Clear All Responses
    if (clearResponsesBtn) {
        clearResponsesBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all received responses from local storage?')) {
                saveStoredResponses([]);
                selectedMsgId = null;
                renderInboxList();
                showToast('Inbox Cleared', 'All response entries have been cleared.', 'info');
            }
        });
    }

    /* ----------------------------------------------------------------------
       18. BACK TO TOP BUTTON
       ---------------------------------------------------------------------- */
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
