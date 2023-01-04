import { Fireblocks, Sendgrid, Twilio } from '#services';

const twilio = Twilio('hello@gmail.com');
const fireblocks = Fireblocks();
const sendgrid = Sendgrid('hello@gmail.com');

import X from './services/domain-registrar/aws-route53.js';
const x = await X('abc').getDomainInfo('asaf.com');
x.domain;
