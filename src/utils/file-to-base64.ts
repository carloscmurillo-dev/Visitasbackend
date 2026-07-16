import axios from 'axios';

// 👇️ if you use CommonJS
// const axios = require('axios');

async function imageUrlToBase64(url:any) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    });

    const contentType = response.headers['content-type'];

    const base64String = `data:${contentType};base64,${Buffer.from(
      response.data,
    ).toString('base64')}`;

    return base64String;
  } catch (err) {
    console.log(err);
  }
}