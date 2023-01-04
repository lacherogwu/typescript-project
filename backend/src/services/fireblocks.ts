import fireblocksSDK from 'fireblocks-sdk';
import config from '../config/index.js';

export default () => {
    const { apiKey, secret } = config.services.fireblocks;

    const fireblocks = fireblocksSDK({
        apiKey,
        secret,
    });

    return {
        async getBalance() {
            const balance = await fireblocks.get('/v1/vault/accounts/balance');
            return balance;
        },
    };
};
