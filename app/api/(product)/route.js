import { NextRequest, NextResponse } from "next/server";

// GET request handler
// export async function GET() {
//   return NextResponse.json(
//     { msg: 'Response from backend' },
//     {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   );
// }

// POST request handler
export async function POST(req) {
   
    // Parse the JSON body from the request
    const body = await req.json();

    // Log the received data (just for testing purposes)
    console.log('Received data:', body);

    // Respond back with success and the received data
    return new Response(
      JSON.stringify({ msg: 'Data received', Output: body.Input })
    )
   
   }