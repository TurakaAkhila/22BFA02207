// Custom client-side logger
const Logger = (() => {
  const logs = [];
  return {
    log: (action, details) => {
      const entry = {
        timestamp: new Date().toLocaleString(),
        action,
        details,
      };
      logs.push(entry);
      document.dispatchEvent(new CustomEvent("logUpdate", { detail: entry }));
    },
    getLogs: () => logs,
  };
})();

export default Logger;
