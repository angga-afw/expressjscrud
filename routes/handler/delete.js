const {User} = require('../../models');

module.exports = async (req,res) =>{
    const id = req.params.id;

    const user = await User.findByPk(id,{
        attributes:['id','name','profession','role','avatar']
    });

    if(!user){
        return res.status(200).json({
            status:'eror',
            message:'User not found'
        });
    }else{
        await user.destroy();
    }

    const sqlOptions = {
        attributes:['id','name','profession','role','avatar']
    }

    const users = await User.findAll(sqlOptions);
    return res.json({
        status: 'Success',
        data: users
    });
}