import {Server} from './server/server';
import {userRouter} from './common/Routes/Users/user.routes';
import {messageRouter} from './common/Routes/Message/message.routes';

const server = new Server();
server.bootstrap([userRouter, messageRouter]).then(server => {
    console.log('Server is listining on: http://localhot:3001');
}).catch(error => {
    console.log('Server failed to start')
    console.error(error)
    process.exit(1);
})