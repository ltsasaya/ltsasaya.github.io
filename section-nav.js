const sectionLinks = [...document.querySelectorAll('.section-nav a')];
const sections = sectionLinks.map(link => document.querySelector(link.hash));
const sectionNavigation = document.querySelector('.section-navigation');
const sectionNav = document.querySelector('.section-nav');
const sectionToggle = document.querySelector('.section-nav-toggle');
let updatePending = false;
let hideTimer;
let manuallyCollapsed = false;

function setExpanded(expanded) {
  sectionToggle.setAttribute('aria-expanded', String(expanded));
  sectionToggle.setAttribute('aria-label', expanded ? 'Hide section navigation' : 'Show section navigation');
  sectionToggle.textContent = expanded ? '←' : '→';
  sectionNavigation.dataset.expanded = String(expanded);
  sectionNav.inert = !expanded;
  sectionNav.setAttribute('aria-hidden', String(!expanded));
}

function scheduleHide() {
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    if (sectionNavigation.matches(':hover') || sectionNav.contains(document.activeElement) || sectionToggle.matches(':focus-visible')) return;
    setExpanded(false);
  }, 2000);
}

sectionToggle.addEventListener('click', () => {
  const expanded = sectionToggle.getAttribute('aria-expanded') !== 'true';
  manuallyCollapsed = !expanded;
  setExpanded(expanded);
  scheduleHide();
});
sectionNavigation.addEventListener('pointerenter', () => clearTimeout(hideTimer));
sectionNavigation.addEventListener('pointerleave', scheduleHide);
sectionNavigation.addEventListener('focusin', () => clearTimeout(hideTimer));
sectionNavigation.addEventListener('focusout', scheduleHide);

function updateSection() {
  updatePending = false;
  const marker = Math.min(window.innerHeight * 0.3, 240);
  let active = -1;
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= marker) active = index;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    active = sections.length - 1;
  }
  sectionLinks.forEach((link, index) => {
    if (index === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function scheduleUpdate() {
  if (updatePending) return;
  updatePending = true;
  requestAnimationFrame(updateSection);
}

window.addEventListener('scroll', () => {
  if (!manuallyCollapsed) setExpanded(true);
  scheduleHide();
  scheduleUpdate();
}, { passive: true });
window.addEventListener('resize', scheduleUpdate);
window.addEventListener('load', scheduleUpdate);
setExpanded(false);
sectionNavigation.hidden = false;
updateSection();
