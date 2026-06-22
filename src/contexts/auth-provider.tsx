import { type PropsWithChildren, useMemo, useState } from 'react';
import type {
    AuthContextValue,
    AuthData,
    AuthUser,
    SignInPayload,
} from '../types/auth';
import { AuthContext } from './auth-context';

export function AuthProvider({ children }: PropsWithChildren) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<AuthUser | null>(null);
    const [data, setData] = useState<AuthData>({});

    const signIn = (payload?: SignInPayload) => {
        setUser(payload?.user ?? null);
        setData(payload?.data ?? {});
        setIsAuthenticated(true);
    };

    const signOut = () => {
        setUser(null);
        setData({});
        setIsAuthenticated(false);
    };

    const value = useMemo<AuthContextValue>(
        () => ({
            isAuthenticated,
            user,
            data,
            signIn,
            signOut,
            setUser,
            setData,
        }),
        [data, isAuthenticated, user],
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
