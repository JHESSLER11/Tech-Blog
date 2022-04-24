const User = require('./users');
const Comments = require('./comments');
const Post = require("./post")


//associations 
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Comments.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  Comments.belongsTo(Post, {
    foreignKey: 'post_id',
  });
  
  User.hasMany(Comments, {
    foreignKey: 'user_id',
  });
  
  Post.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });

module.exports = { User, Comments, Post };