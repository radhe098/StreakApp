import { NextResponse } from "next/server"; 
 export async function POST( req){    
   const data = await req.json()
  await new Promise(resolve => setTimeout(resolve, 3000))
  console.log("3 seconds passed");
  return NextResponse.json(data)
}
 

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { shortUrl } = req.body;

//     if (!shortUrl) {
//       return res.status(400).json({ error: 'Shortened URL is required' });
//     }

//     try {
//       // Perform the fetch request on the server-side
//       const response = await fetch(shortUrl, { method: 'HEAD', redirect: 'follow' });
//       const originalUrl = response.url;

//       // Return the resolved original URL to the frontend
//       res.status(200).json({ originalUrl });
//     } catch (error) {
//       console.error('Error revealing URL:', error);
//       res.status(500).json({ error: 'Failed to retrieve the original URL.' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

 
// import fetch from 'node-fetch';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { shortUrl } = req.body;

//     if (!shortUrl) {
//       return res.status(400).json({ error: 'Shortened URL is required' });
//     }

//     try {
//       // Perform the fetch request on the server-side
//       const response = await fetch(shortUrl, { method: 'HEAD', redirect: 'follow' });
//       const originalUrl = response.url;

//       // Return the resolved original URL to the frontend
//       res.status(200).json({ originalUrl });
//     } catch (error) {
//       console.error('Error revealing URL:', error);
//       res.status(500).json({ error: 'Failed to retrieve the original URL.' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
