const http=require('http');
const app=require('./src/config/express.config');

(()=>{
    const httpServer=http.createServer(app);

const PORT='9005';
const HOST='localhost';
httpServer.listen(PORT,HOST,()=>{
    console.log(`Server is running at http://${HOST}:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
})
})()