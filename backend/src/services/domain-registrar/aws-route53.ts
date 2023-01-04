import aws from 'aws';
import type { DomainRegistrar } from './index.js';

type AwsRoute53 = keyof typeof config.services.aws.route53;

export default (account: string): DomainRegistrar => {
    return {
        async getDomainInfo(domain) {
            return await aws.ausfjas;
        },
        async registerDomain(domain) {
            // code
        },
        registerSomething() {
            return ['a', 'b'];
        },
    };
};
