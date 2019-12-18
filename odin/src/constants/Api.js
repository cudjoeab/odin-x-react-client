export const getApiRoot = () => {
  const localRoot = "http://localhost:3000";
  const ngrok = ""
  const productionRoot = ""
  return localRoot;
};

export const getApiWebsocketRoot = (roomId) => {
  const localRoot = `ws://${getApiRoot().split('http://')[1]}/api/v1/rooms/${roomId}/cable`;
  const productionRoot = `wss://${getApiRoot().split('https://')[1]}/api/v1/rooms/${roomId}/cable`;
  return productionRoot
}