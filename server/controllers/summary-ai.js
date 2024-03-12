'use strict';

module.exports = ({ strapi }) => ({
  async summary(ctx) {
    ctx.body = await strapi
      .plugin('strapi-summarize-ai-plugin')
      .service('summaryAi')
      .summary(ctx);
  },
});
