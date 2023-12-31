const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiCommentsRouter = require('./routes/apiCommentsRouter');
const apiUsersRouter = require('./routes/apiUsersRouter');
const apiQuestRouter = require('./routes/apiQuestRouter');
const apiQuestionsRouter = require('./routes/apiQuestionRouter');
const apiLocationRouter = require('./routes/apiLocationRouter');
const apiAcievesRouter = require('./routes/apiAchievesRouter');
const apiProgressRouter = require('./routes/apiProgressRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    credentials: true,
    origin: true
}));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/comments', apiCommentsRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/quest', apiQuestRouter);
app.use('/api/question', apiQuestionsRouter);
app.use('/api/location', apiLocationRouter);
app.use('/api/achieves', apiAcievesRouter)
app.use('/api/progress', apiProgressRouter);

app.listen(PORT, () => console.log(`API server has started on port ${PORT}`));
