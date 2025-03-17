import jwt from 'jsonwebtoken'


export const protectRoute = (req,res,next)=>{
    const token = req.headers.authorization;


    if(!token) return res.status(401).json({message: "Not authorised",error});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();


    }catch(error){
        console.log(" RR in protectRoute",error);
        res.status(401).json({message:"Token is invalid"},error);
    }
}