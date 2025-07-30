// aegis.js
document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const input = document.createElement("div");
  input.innerHTML = "> Awaiting Command Input...";
  terminal.appendChild(input);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = prompt("Aegis Command Input:");
      const response = document.createElement("div");
      response.innerHTML = `> Executing [${cmd}]... ✅ Complete`;
      terminal.appendChild(response);
    }
  });
});
