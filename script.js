function updateCounts() {
  const text = document.getElementById('text').value;

  const totalChars = text.length;
  const charsWithoutSpaces = text.replace(/\s/g, '').length;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  document.getElementById('charWithSpaces').textContent = totalChars;
  document.getElementById('charWithoutSpaces').textContent = charsWithoutSpaces;
  document.getElementById('wordCount').textContent = words;
}
