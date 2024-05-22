const expenseModel = require('../Model/ExpenseModel');
const addExpenses = async(req,res,next)=>{
    console.log(req.body.category);
    try{
        const amount = req.body.amount;
        const des = req.body.description;
        const cate = req.body.category;
        const data = await expenseModel.create({
           amount:amount,
           description:des,
           category:cate
        })
        res.status(201).json({newExpenseDetail: data});
        console.log(JSON.stringify(data));
    }
    catch(err)  {
        res.status(500).json({
            error:err
        })
    }
}
const getExpenses = async(req,res,next)=>{
    try{
        const expenses = await expenseModel.findAll();
        res.status(200).json({allExpenses:expenses})
    }
    catch(err){
        console.log('Get User is failing', JSON.stringify(err));
        res.status(500).json({error:err})
    }
}

const deleteExpense = async(req,res,next)=>{
    console.log('in deleteExpense');
    try{
        if(!req.params.id){
            console.log('id is missing');
            res.status(400).json({error:'id is missing'});
        }
        const eid = req.params.id;
        await expenseModel.destroy({where: {id:eid}});
        res.status(200);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
}

module.exports = {
    addExpenses,
    getExpenses,
    deleteExpense
}