import jwt from 'jsonwebtoken';

// user authentication middleware

const authUser = async (req,res,next) => {
    try{
        
        const token = req.headers.authorization;

        if(!token){
            return res.json({success: false, message: 'Not Authorized Login Again!'});
        }

        const decode_token = jwt.verify(token,process.env.JWT_SECRET);

        req.body.userId = decode_token.id

        next();

    }
    catch(error){
        res.json({success: false,message: error.message})
    }
}

export default authUser;