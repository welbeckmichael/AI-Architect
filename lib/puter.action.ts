import puter from '@heyputer/puter.js';

export const signIn = async () => await puter.auth.signIn();

export const signOut = () => puter.auth.signOut();

export const getCurrentUser = async () => {
    try {
        return await puter.auth.getUser();
    } catch {
        return null;
    }
}
const PROJECT_KEY_PREFIX = 'project_';

export const createProject = async ({
    item,
    visibility,
}: {
    item: DesignItem;
    visibility: 'private' | 'public';
}): Promise<DesignItem | null> => {
    try {
        const key = `${PROJECT_KEY_PREFIX}${item.id}`;
        await puter.kv.set(key, JSON.stringify({ ...item, visibility }));
        return item;
    } catch {
        return null;
    }
};

export const getProjects = async (): Promise<DesignItem[]> => {
    try {
        const entries = await puter.kv.list(PROJECT_KEY_PREFIX + '*', true);
        if (!entries || !Array.isArray(entries)) return [];
        return entries
            .map((entry) => {
                try {
                    return JSON.parse(entry.value as string) as DesignItem;
                } catch {
                    return null;
                }
            })
            .filter(Boolean) as DesignItem[];
    } catch {
        return [];
    }
};

export const getProject = async (id: string): Promise<DesignItem | null> => {
    try {
        const key = `project_${id}`;
        const value = await puter.kv.get(key);
        if (!value) return null;
        return JSON.parse(value as string) as DesignItem;
    } catch {
        return null;
    }
};

export const updateProject = async (item: DesignItem): Promise<DesignItem | null> => {
    try {
        const key = `project_${item.id}`;
        await puter.kv.set(key, JSON.stringify(item));
        return item;
    } catch {
        return null;
    }
};
