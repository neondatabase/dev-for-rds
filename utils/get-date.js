export const getDate = () => {
  const date = new Date().toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
  });

  const time = new Date().toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: '2-digit',
  });

  return {
    date,
    time,
  };
};
