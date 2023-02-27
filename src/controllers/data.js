import Data from '../models/Data';
import playerGamePlayDatas from '../models/PlayerGameplayData';
import {GetAllUsername,GetAllNation,GetAllGame,GetAllGameTimePlay,GetAllPlayToEarn,GetTransactionCount,GetTransactionCountByDate,GetUsernameCount,GetAllGameplayDate} from '../services/dataServices';

export const createdData = async (req, res) => {
  Data.insertMany(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(400).send(error);
    });
};


export const getTransactionHistory = async (req, res) => {
  try {
    let resData = await playerGamePlayDatas.aggregate([
      {
        $lookup: {
          from: 'profiles',
          localField: 'player_id',
          foreignField: '_id',
          as: 'playerData',
        },
      },
      { $unwind: '$playerData' },
      {
        $project: {
          date: { $dateToString: { format: '%Y-%m-%d', date: '$current_time' } },
          player_id: '$playerData.username',
        },
      },
      {
        $group: {
          _id: {
            date: '$date',
            player_id: '$player_id',
          },
          amount: { $sum: 1 },
          player_id: { $sum: '$count' },
        },
      },
      {
        $group: {
          _id: '$_id.date',
          data: {
            $push: {
              username: '$_id.player_id',
              count_play: '$amount',
              count: { $sum: 1 },
            },
          },
          transaction_count: { $sum: '$amount' },
        },
      },
      { $unwind: '$data' },
      {
        $group: {
          _id: '$_id',
          player_count: { $sum: '$data.count' },
          transaction_count: { $addToSet: '$transaction_count' },
        },
      },
      { $sort: { _id: -1 } },
      { $unwind: '$transaction_count' },
      {
        $project: {
          player_count: 1,
          transaction_count: 1,
          game_per_player: { $divide: ['$transaction_count', '$player_count'] },
        },
      }
    ]);
    res.status(200).json({status : true,data: resData})
  } catch (e) {
    res.status(400).send(e);
  }
};

export const transactionCountByDate = async (req, res) => {
  let data = req.body;
  GetTransactionCountByDate(data.date,data.range)
  .then(data => {
    const result = data;
    res.status(200).json({ status: true, result });
  })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
};

export const transactionCount = async (req, res) => {
  GetTransactionCount()
  .then(data => {
    const result = data;
    res.status(200).json({ status: true, result });
  })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
};

export const usernameCount = async (req, res) => {
  GetUsernameCount()
  .then(data => {
    const result = data;
    res.status(200).json({ status: true, result });
  })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
};

export const allUsername = async (req, res) => {
  GetAllUsername()
  .then(data => {
    const result = data;
    res.status(200).json({ status: true, result });
  })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
};

export const allNation = async (req, res) => {
    GetAllNation()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
};

export const getGameplayDate = async ( req,res) =>{
  GetAllGameplayDate().then(data => {
    const result = data;
    res.status(200).json({ status: true, result });
  })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
}

export const allGame = async (req,res) => {
  GetAllGame()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}


export const allGameTimePlay  = async (req,res) => {
  GetAllGameTimePlay()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allPlayToEarn  = async (req,res) => {
  GetAllPlayToEarn()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}
