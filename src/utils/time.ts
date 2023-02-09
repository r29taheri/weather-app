export const handleReturnTime = () => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();

  return time;
};
