async function testLiveContact() {
  try {
    const res = await fetch('https://hegde-punith-portfolio-backend.onrender.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://hegdepunithramesh.live',
      },
      body: JSON.stringify({
        name: 'Live Inspection Test',
        email: 'hegdepunith01@gmail.com',
        subject: 'Inspection Verification',
        message: 'Inspecting live email delivery status.',
      }),
    });

    const status = res.status;
    const data = await res.json();
    console.log('Status Code:', status);
    console.log('Response Body:', data);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

testLiveContact();
