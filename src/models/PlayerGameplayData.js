import mongoose from 'mongoose';
const { Schema } = mongoose;

const PlayerGamePlayDataSchema = new Schema({
    room_id: { 
      index: true,
      type: Schema.Types.ObjectId, 
      ref: 'playerGamePlayData' 
    },
    player_id: { 
      index: true,
      type: Schema.Types.ObjectId, 
      ref: 'playerGamePlayData' 
    },
    wallet_address : String,
    tx_address : String,
    current_score: Number,
    cheat: {
      index: true,
      type: Boolean,
    },
    naka_for_player: Number,
    cheat_detail : Object,
    play_detail : Object,
    used_items: [
      {
        item_id: Schema.Types.ObjectId, 
        qty: Number
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    is_active:{ 
      index: true,
      type: Boolean
    },
    game_id: { 
      index: true,
      type: Schema.Types.ObjectId
    },
    tx_address_bkk: [],
    current_time: {
        type: Date,
        default: Date.now
    }
  });

  
const playerGamePlayData = mongoose.model('playerGamePlayData', PlayerGamePlayDataSchema);
export default playerGamePlayData;