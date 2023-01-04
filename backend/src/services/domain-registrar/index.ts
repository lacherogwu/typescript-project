type DomainInfo = {
    domain: string;
};

export interface DomainRegistrar {
    registerDomain(domain: string): Promise<void>;
    getDomainInfo(domain: string): Promise<DomainInfo>;
    registerSomething(): [string, string];
}
