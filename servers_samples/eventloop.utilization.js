import { performance } from "node:perf_hooks";

function monitorEventLoopUtilization() {
  const elu1 = performance.eventLoopUtilization();

  setTimeout(() => {
    const elu2 = performance.eventLoopUtilization(elu1);
    console.log(
      `Event Loop Utilization: ${(elu2.utilization * 100).toFixed(2)}%`,
    );
    console.log(`Active time: ${elu2.active}ms`);
    console.log(`Idle time: ${elu2.idle}ms`);

    if (elu2.utilization > 0.8) {
      console.warn(
        "Event loop heavily utilized - potential performance issues",
      );
    }
  }, 1000);
}

setInterval(monitorEventLoopUtilization, 5000);
