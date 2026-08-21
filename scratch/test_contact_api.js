import http from 'http';

function makeRequest(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : '';

    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(dataString),
      },
    };

    const req = http.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => (responseBody += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(responseBody) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: responseBody });
        }
      });
    });

    req.on('error', (err) => reject(err));

    if (body) {
      req.write(dataString);
    }
    req.end();
  });
}

async function runTests() {
  console.log('--- TESTING RATE LIMITING (EXPECT 429 TOO MANY REQUESTS) ---');

  for (let i = 1; i <= 6; i++) {
    const res = await makeRequest('/api/contact', 'POST', {
      name: `User ${i}`,
      email: `user${i}@example.com`,
      subject: `Testing Rate Limit ${i}`,
      message: `This is test message ${i} checking rate limit thresholds.`,
    });
    console.log(`Request #${i} status:`, res.status, res.data);
  }
}

runTests();
