import jwt from 'jsonwebtoken';

// admin authentication middleware

const authAdmin = async (req,res,next) => {
    try{
        
        const authToken = req.headers.authorization;

        if(!authToken){
            return res.json({success: false, message: 'Not Authorized Login Again!'});
        }

        const decode_token = jwt.verify(authToken,process.env.JWT_SECRET);

        if (decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: 'Not Authorized Login Again!'});
        }

        next();

    }
    catch(error){
        res.json({success: false,message: error.message})
    }
}

export default authAdmin;