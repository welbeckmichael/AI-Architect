interface DesignItem {
    id: string;
    name: string;
    sourceImage: string;
    renderedImage?: string;
    renderedPath?: string;
    timestamp: number;
    visibility?: 'private' | 'public';
    ownerId?: string | null;
    isPublic?: boolean;
}

interface AuthState {
    isSignedIn: boolean;
    username: string | null,
    userId: string | null,
}

type AuthContext = {
    isSignedIn: boolean;
    username: string | null,
    userId: string | null,
    refreshAuth: () => Promise<boolean>;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
}