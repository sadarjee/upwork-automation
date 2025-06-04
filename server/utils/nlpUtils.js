module.exports.extractPainPoint = function(description) {
  if (!description) return '';
  // Simple heuristic: return first sentence
  return description.split('. ')[0];
};
