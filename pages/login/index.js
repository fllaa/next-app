import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    useEffect(() => {
        router.push('/?login=true', '/login')
    }, [])
    return null;
}