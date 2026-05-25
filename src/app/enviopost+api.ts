import { ExpoRequest } from 'expo-router/server';

export async function POST(request: ExpoRequest): Promise<Response> {
    const { email, password } = await request.json();

    if (email === 'limasilvalima@hotmail.com' && password === '123456') {
        return Response.json({
            email,
            password,
            name: 'John Doe',
        });
    }

    return new Response('Usuario ou senha incorretos', {
        status: 404,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
