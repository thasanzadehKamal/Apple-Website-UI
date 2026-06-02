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
