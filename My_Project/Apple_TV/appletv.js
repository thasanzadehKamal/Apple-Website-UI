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
        const overlapTargets = [
            document.querySelector("section > article:first-of-type"),
            document.getElementById("hero2")
        ].filter(Boolean);

        function updateOverlapEffect() {
            if (!overlapTargets.length) return;

            overlapTargets.forEach((container) => {
                const photo = container.querySelector(".img img");
                if (!photo) return;

                if (prefersReducedMotion) {
                    photo.style.setProperty("--overlap-shift", "0px");
                    photo.style.setProperty("--overlap-scale", "1");
                    return;
                }

                const rect = container.getBoundingClientRect();
                const viewport = window.innerHeight;
                const totalTravel = viewport + rect.height;
                const progressRaw = (viewport - rect.top) / totalTravel;
                const progress = Math.max(0, Math.min(progressRaw, 1));
                const shift = -(progress * 70);
                const scale = 1 + progress * 0.08;

                photo.style.setProperty("--overlap-shift", `${shift.toFixed(2)}px`);
                photo.style.setProperty("--overlap-scale", scale.toFixed(4));
            });
        }

        let overlapRaf = null;
        function onOverlapScroll() {
            if (overlapRaf) return;
            overlapRaf = requestAnimationFrame(() => {
                updateOverlapEffect();
                overlapRaf = null;
            });
        }

        window.addEventListener("scroll", onOverlapScroll, { passive: true });
        window.addEventListener("resize", onOverlapScroll);
        updateOverlapEffect();

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

        AOS.init();
