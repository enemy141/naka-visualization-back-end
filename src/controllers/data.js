import Data from '../models/Data';
import {GetAllNation,GetAllGame,GetAllGameTimePlay,GetAllPlayToEarn,GetTransactionCount,GetUsernameCount,GetAllGameplayDate} from '../services/dataServices';

export const createdData = async (req, res) => {
  Data.insertMany(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(400).send(error);
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
