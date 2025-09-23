const AnimatedBackground = () => {
  const spheres = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 6,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {spheres.map((sphere) => (
        <div
          key={sphere.id}
          className="floating-sphere"
          style={{
            width: `${sphere.size}px`,
            height: `${sphere.size}px`,
            left: `${sphere.left}%`,
            top: `${sphere.top}%`,
            animationDelay: `${sphere.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;