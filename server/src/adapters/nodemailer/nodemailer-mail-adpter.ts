import nodemailer from 'nodemailer';
import { SendMailData , MailAdapter } from "../mail-adpter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
       user: "d5ebb3b00c6315",
       pass: "64258478d9a9d1"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject , body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Kauan Nesque <flathinsees@gmail.com>',
            subject,
            html: body
        });
    }
}