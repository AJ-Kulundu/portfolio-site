import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //Validate request if it has a secret

  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try{
    //path to page being revalidated
    await res.revalidate('/tweet');
    return res.json({revalidated:true})
  } catch(err){
    // If there is an error next.js will not revalidate
    return res.status(500).send('Error revalidating');
  }
}