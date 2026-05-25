import { ExpoRequest } from 'expo-router/server';

export async function POST(request: ExpoRequest): Promise<Response> {
    let email, password;

    try {
        const body = await request.json();
        email = body.email;
        password = body.password;
        console.log("Recebido na API:", email, password); // Debug no terminal
    } catch (error) {
        return new Response('Corpo da requisição inválido', { status: 400 });
    }

    // Usamos .trim() para remover espaços e .toLowerCase() no email para evitar erros comuns de digitação
    const normalizedEmail = email?.trim().toLowerCase();
    const normalizedPassword = password?.trim();

    if (normalizedEmail === 'limasilvalima@hotmail.com' && normalizedPassword === '123456') {
        return Response.json({
            email: normalizedEmail,
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