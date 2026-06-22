export interface AuthUser {
    id: number;
    name: string;
    email: string;
}

export interface AuthData {
    permissions: string[];
    source: string;
}

export interface SignInPayload {
    user?: AuthUser | null;
    data?: AuthData;
}

export interface AuthContextValue {
    isAuthenticated: boolean;
    user: AuthUser | null;
    data: AuthData;
    signIn: (payload?: SignInPayload) => void;
    signOut: () => void;
    setUser: (user: AuthUser | null) => void;
    setData: (data: AuthData) => void;
}
