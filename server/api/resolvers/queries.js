const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, context, info) {
    return context.user;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id);
      return user;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async item(parent, { id }, { pgResource }, info) {
    try {
      const item = await pgResource.getItemById(id);
      return item;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  //Items except for users own items
  async items(parent, { filter }, { pgResource }, info) {
    try {
      const items = await pgResource.getItems(filter);
      return items;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async tags(parent, args, { pgResource }, info) {
    try {
      const tags = await pgResource.getTags();
      return tags;
    } catch (e) {
      throw new ApolloError(e);
    }
  }
});
module.exports = queryResolvers;
