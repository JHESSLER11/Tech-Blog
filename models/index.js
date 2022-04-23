const User = require('./Users');
const Comments = require('./Comments');
const Post = require("./Post")


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