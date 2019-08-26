import express from 'express';
import PORT from './config/port';
import adminroute from './routes/admin';
import mentorroute from './routes/mentor';
import menteeroute from './routes/mentee';
import authroute from './routes/Auth';
import not_found from './routes/default';

const app = express();

// routers that will be used

app.use('/api/v1', authroute);
app.use('/api/v1', adminroute);
app.use('/api/v1', mentorroute);
app.use('/api/v1', menteeroute);
app.use(not_found);

// start server
app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
