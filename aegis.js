/**
 * Aegis Terminal Command Interface
 * 
 * Security implementation follows OWASP XSS Prevention Cheat Sheet
 * https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
 * 
 * Uses textContent instead of innerHTML to prevent XSS attacks (OWASP Rule #1)
 * Implements input sanitization according to OWASP guidelines
 */

// aegis.js
document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const input = document.createElement("div");
  
  // Use textContent instead of innerHTML to prevent XSS (OWASP XSS Prevention Rule #1)
  input.textContent = "> Awaiting Command Input...";
  terminal.appendChild(input);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = prompt("Aegis Command Input:");
      
      // Sanitize user input according to OWASP guidelines
      // Limit command length to prevent DoS attacks (NIST SP 800-53 SI-10)
      const sanitizedCmd = sanitizeInput(cmd);
      
      const response = document.createElement("div");
      // Use textContent to prevent XSS attacks
      response.textContent = `> Executing [${sanitizedCmd}]... ✅ Complete`;
      terminal.appendChild(response);
    }
  });
});

/**
 * Sanitizes user input according to OWASP Input Validation guidelines
 * https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
 * 
 * @param {string | null} input - User input to sanitize
 * @returns {string} Sanitized input
 */
function sanitizeInput(input) {
  if (!input) return "";
  
  // Limit input length to prevent buffer overflow (NIST SP 800-53 SI-10)
  const maxLength = 100;
  let sanitized = input.substring(0, maxLength);
  
  // Remove potentially dangerous characters (OWASP Input Validation)
  // Allow only alphanumeric, spaces, and basic punctuation
  sanitized = sanitized.replace(/[^a-zA-Z0-9\s\-_.]/g, '');
  
  return sanitized;
}
