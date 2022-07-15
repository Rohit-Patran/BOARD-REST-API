import Board from '../models/boardModels.js';
import counter from '../models/counterModel.js';

const getBoards = (req,res) => {
    const boardArray = [];
    Board.find()
    .then(result => {
        result.forEach(board => {
            boardArray.push({
                id:board._id,
                stage:board.stage,
                title:board.title
            }
            )
        });
        res.json(boardArray);
    }
    )
    .catch(error => {
        res.status(400).send("ERROR:" + error);
    }
    )
};

const add_Board = (req,res) => {
    counter.findOneAndUpdate(
            {id:"autoval"},
            {"$inc":{"seq":1}},
            {new:true},(err,cd) => {
                let seqId;
                if(cd == null)
                {
                    const newVal = new counter({
                        id:"autoval",
                        seq:1
                    });
                    newVal.save();
                    seqId=1
                }
                else{
                    seqId = cd.seq
                }
                const stage = 1;
                const board = new Board(
                    {
                        _id:seqId,
                        stage:stage,
                        title:req.body.title
                    }
                );
                board.save()
                .then(result => {
                res.status(201).json(
                    {
                        id:result._id,
                        stage:result.stage,
                        title:result.title
                    }
                    );
                })
                .catch(error => {
                    res.status(400).send("ERROR:" + error);
                })
            })
};

const update_Board = (req,res) => {
    Board.findByIdAndUpdate(req.params.id , req.body)
    .then(result => {
        if(req.body.stage == 1 || req.body.stage == 2 || req.body.stage == 3)
        {
            res.status(200).json({
                id:result._id,
                stage:result.stage,
                title:result.title
            });
        }
        else{
            res.status(400).json();
        }
    })
    .catch(error => {
        res.json("ERROR:" + error);
    });
}

export { getBoards , add_Board , update_Board };