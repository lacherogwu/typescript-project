import Sendgrid from '@utt-services/sendgrid';
import config from '../config/index.js';

type SendgridAccounts = keyof typeof config.services.sendgrid;

export default (account: SendgridAccounts) => {
    const { apiKey } = config.services.sendgrid[account];
    return Sendgrid(apiKey);
};
