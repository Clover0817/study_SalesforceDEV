export function printMsg(message) {
  const div = document.createElement('div');
  div.textContent = message;
  document.body.appendChild(div);
}
