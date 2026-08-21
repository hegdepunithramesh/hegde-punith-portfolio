async function run() {
  try {
    const res = await fetch('https://hegdepunithramesh.live');
    const html = await res.text();
    console.log('HTML Length:', html.length);
    const match = html.match(/src="(\/assets\/index-[^"]+\.js)"/);
    console.log('JS Bundle Path:', match ? match[1] : 'Not Found');
    
    if (match) {
      const jsRes = await fetch('https://hegdepunithramesh.live' + match[1]);
      const jsText = await jsRes.text();
      console.log('JS Bundle Size:', jsText.length);
      console.log('Contains Render URL:', jsText.includes('hegde-punith-portfolio-backend.onrender.com'));
      const apiMatches = jsText.match(/https:\/\/[^"'\s]*onrender\.com[^"'\s]*/g);
      console.log('Found Render URLs:', apiMatches);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}
run();
