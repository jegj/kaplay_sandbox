const { monitorEventLoopDelay } = require("perf_hooks");

const histogram = monitorEventLoopDelay({ resolution: 20 });
histogram.enable();

setInterval(() => {
  const lagMs = histogram.mean / 1000000; // Convert nanoseconds to milliseconds
  console.log(`Event loop lag: ${lagMs.toFixed(2)}ms`);

  if (lagMs > 100) {
    console.warn("High event loop lag detected!");
  }

  histogram.reset();
}, 5000);
