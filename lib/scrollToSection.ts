export function scrollToSection(targetId: string) {
  const element = document.getElementById(targetId);
  if (!element) return;

  if (window.__lenis) {
    window.__lenis.resize();
    window.__lenis.scrollTo(element, { offset: 0 });
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  window.history.pushState(null, "", `#${targetId}`);
}
