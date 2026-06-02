  const nav = document.getElementById("mainNav");
    const stickyStart = 80;

    function handleNavScroll() {
        if (window.scrollY > stickyStart) {
            nav.classList.add("nav-sticky");
            document.body.classList.add("nav-offset");
        } else {
            nav.classList.remove("nav-sticky");
            document.body.classList.remove("nav-offset");
        }
    }

    window.addEventListener("scroll", handleNavScroll, { passive: true });
    handleNavScroll();

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container3 = document.querySelector(".container3");

    function updateContainer3Overlap() {
        if (!container3) return;

        if (prefersReducedMotion) {
            container3.style.setProperty("--container3-shift", "0px");
            return;
        }

        const rect = container3.getBoundingClientRect();
        const viewport = window.innerHeight;
        const totalTravel = viewport + rect.height;
        const progressRaw = (viewport - rect.top) / totalTravel;
        const progress = Math.max(0, Math.min(progressRaw, 1));
        const shift = -40 * progress;

        container3.style.setProperty("--container3-shift", `${shift.toFixed(2)}px`);
    }

    let overlapRaf = null;
    function onOverlapScroll() {
        if (overlapRaf) return;
        overlapRaf = requestAnimationFrame(() => {
            updateContainer3Overlap();
            overlapRaf = null;
        });
    }

    window.addEventListener("scroll", onOverlapScroll, { passive: true });
    window.addEventListener("resize", onOverlapScroll);
    updateContainer3Overlap();

    if (!prefersReducedMotion) {
        let currentScroll = window.scrollY;
        let targetScroll = window.scrollY;
        let smoothTicking = false;
        const scrollEase = 0.09;
        const wheelSpeed = 0.75;

        function smoothWheelScroll() {
            currentScroll += (targetScroll - currentScroll) * scrollEase;
            if (Math.abs(targetScroll - currentScroll) < 0.5) {
                currentScroll = targetScroll;
                smoothTicking = false;
            } else {
                requestAnimationFrame(smoothWheelScroll);
            }
            window.scrollTo(0, currentScroll);
        }

        window.addEventListener("wheel", function (e) {
            if (e.ctrlKey) return;
            e.preventDefault();
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            targetScroll = Math.max(0, Math.min(targetScroll + e.deltaY * wheelSpeed, maxScroll));

            if (!smoothTicking) {
                smoothTicking = true;
                requestAnimationFrame(smoothWheelScroll);
            }
        }, { passive: false });
    }

    const tvGallery = document.querySelector(".tvplusgallery");
    const tvTrack = tvGallery ? tvGallery.querySelector(".slide") : null;
    const tvSlides = tvTrack ? Array.from(tvTrack.querySelectorAll(".slides")) : [];
    const tvDots = tvGallery ? Array.from(tvGallery.querySelectorAll(".dot")) : [];

    if (tvGallery && tvTrack && tvSlides.length > 0) {
        let activeIndex = 0;
        const totalSlides = tvSlides.length;
        const autoDelayMs = 4200;
        let autoTimer = null;

        function setActiveDot(index) {
            tvDots.forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === index);
                dot.setAttribute("aria-selected", String(dotIndex === index));
            });
        }

        function goToSlide(index, withTransition = true) {
            activeIndex = (index + totalSlides) % totalSlides;
            tvTrack.style.transition = withTransition
                ? "transform 1.15s cubic-bezier(0.22, 0.61, 0.36, 1)"
                : "none";
            tvTrack.style.transform = `translate3d(-${activeIndex * 100}%, 0, 0)`;
            setActiveDot(activeIndex);
        }

        function nextSlide() {
            goToSlide(activeIndex + 1);
        }

        function stopAutoplay() {
            if (!autoTimer) return;
            clearInterval(autoTimer);
            autoTimer = null;
        }

        function startAutoplay() {
            stopAutoplay();
            autoTimer = setInterval(nextSlide, autoDelayMs);
        }

        tvDots.forEach((dot, dotIndex) => {
            dot.setAttribute("role", "button");
            dot.setAttribute("tabindex", "0");
            dot.setAttribute("aria-label", `Go to slide ${dotIndex + 1}`);

            dot.addEventListener("click", () => {
                goToSlide(dotIndex);
                startAutoplay();
            });

            dot.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goToSlide(dotIndex);
                    startAutoplay();
                }
            });
        });

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        });

        goToSlide(0, false);
        startAutoplay();
    }
