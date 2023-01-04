import Twilio from 'twilio';
import config from '../config/index.js';

type TwilioAccounts = keyof typeof config.services.twilio;

export default (account: TwilioAccounts) => {
    const { accountId, token } = config.services.twilio[account];
    const client = new Twilio(accountId, token);

    return {
        sendSms(phone: number, message: string) {
            return client.messages.create({
                body: message,
                to: phone,
                from: '+12058502078',
            });
        },
    };
};
