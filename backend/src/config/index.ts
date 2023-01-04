export default {
    services: {
        twilio: {
            'moshe@gmail.com': {
                accountId: 'ACXXXXXXXX',
                token: 'XXXXXXXX',
            },
            'hello@gmail.com': {
                accountId: 'ACXXXXXXXX',
                token: 'XXXXXXXX',
            },
        },
        fireblocks: {
            apiKey: 'XXXXXXXX',
            secret: 'XXXXXXXX',
        },
        sendgrid: {
            'hello@gmail.com': {
                apiKey: 'XXXXXXXX',
            },
            education: {
                apiKey: 'XXXXXXXX',
            },
        },
    },
} as const;
