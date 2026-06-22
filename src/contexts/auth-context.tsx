import { createContext, useContext } from 'react';
import type { AuthContextValue, AuthData, AuthUser } from '../types/auth';

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth<
    TUser extends AuthUser = AuthUser,
    TData extends AuthData = AuthData,
>() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }

    return {
        ...context,
        user: context.user as TUser | null,
        data: context.data as TData,
    };
}
