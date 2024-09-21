const { Sequelize, DataTypes } = require("sequelize");
const mongoose = require("mongoose");

const sequelize = new Sequelize(
  "mysql://user:password@localhost:3306/my_database"
);

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  updatedAt: DataTypes.DATE,
});

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/USERDATABASE", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  lastSyncedAt: Date,
});
const MongoUser = mongoose.model("User", userSchema);

// Sync function to migrate and update data
const syncData = async () => {
  try {
    // Fetch the latest data from the relational database
    const users = await User.findAll({
      where: {
        updatedAt: { $gte: new Date(Date.now() - 10 * 60 * 1000) },
      },
    });

    for (let user of users) {
      await MongoUser.findOneAndUpdate(
        { id: user.id },
        {
          name: user.name,
          email: user.email,
          lastSyncedAt: new Date(),
        },
        { upsert: true, new: true }
      );
    }

    console.log(`${users.length} users synced to MongoDB.`);
  } catch (error) {
    console.error("Error in syncing data:", error);
  }
};

module.exports = { syncData };
