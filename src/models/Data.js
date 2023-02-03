import mongoose from 'mongoose';

const { Schema } = mongoose;

const dataSchema = new Schema({
  createdAt: Date,
  game_id: String,
  username: String,
  score: Number,
  game: String,
  game_type: String,
  day_of_week: String,
  item_name: String,
  item_qty: Number,
  item_price_usd: Number,
  cost_price: Number,
  country: String,
  game_start: Date,
  game_end: Date,
  time_play: Number,
  play_to_earn: Boolean
});

const Data = mongoose.model("Data",dataSchema)

export default Data;