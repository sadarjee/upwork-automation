const { runProfileOptimizer } = require('../services/profileOptimizer');

exports.getRecommendations = async (req, res) => {
  try {
    const recommendations = await runProfileOptimizer();
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
};
