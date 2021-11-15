jest.setTimeout(60000);

// page.on('console', message => console.log(message.text()));

page.on('error', error => console.error(`❌ ${error}`));

page.on('pageerror', error => console.error(`❌ ${error}`));
