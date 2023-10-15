const animationOnScreen = () => {
  const animatedDivs = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target);
      }
    });
  });

  animatedDivs.forEach(div => {
    observer.observe(div);
  });
};

export default animationOnScreen;