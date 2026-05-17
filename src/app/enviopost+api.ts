import { ExpoRequest } from 'expo-router/server';

export async function POST(request: ExpoRequest): Promise<Response> {

    const {email, password} = await request.json();
    return Response.json({
        email,
        password
     });
}
