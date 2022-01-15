/* eslint-disable no-console */
import 'dotenv/config';
import app from '@shared/app';

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(` 💻 Started: ${PORT}`);
});
