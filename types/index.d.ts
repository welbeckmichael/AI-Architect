interface HostingConfig {
    subdomain: string;
}

interface HostedAsset {
    url: string;
}

interface StoreHostedImageParams {
    hosting: HostingConfig | null;
    url: string;
    projectId: string;
    label: string;
}

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
