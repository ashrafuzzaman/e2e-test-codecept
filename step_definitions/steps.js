const { I } = inject();

Given(/I am loged in as "(.+)" with password "(.+)"/, async (email, password) => {
  await I.amOnPage('/');
  await I.fillField('Enter your email address', email);
  await I.click('Next');
  await I.fillField(`Password for ${email}`, password);
  await Promise.all([
    I.click('Login'),
    I.waitForNavigation()
  ]);
  await I.seeInCurrentUrl('/cloud/home');
  // await I.see('Your content marketing performance');
});

Then(/Switch organization to "(.+)"/, async (organizationName) => {
  // pause();
  let orgSwitcherSelector = { css: '.org-name-text' };
  let selectedOrg = await I.grabTextFrom(orgSwitcherSelector);
  if (selectedOrg !== organizationName) {
    await I.click(orgSwitcherSelector);
    await Promise.all([
      I.click(organizationName),
      I.waitForNavigation()
    ]);
  }
});

Then(/Click on the New button on the header and click "(.+)"/, async (newItemText) => {
  await I.click('.button-create-new');
  await I.click(newItemText);
});

Then(/Click on "(.+)"/, async (text) => {
  await I.click(text);
});

Then(/Write "(.+)" into textbox with placeholder "(.+)"/, async (text, placeholder) => {
  await I.clearField(placeholder);
  await I.fillField(placeholder, text);
});

Then(/Select "(.+)" from dropdown below "(.+)"/, async (text, placeholder) => {
  pause();
  await I.click(text);
  await I.clearField(placeholder);
  await I.fillField(placeholder, text);
});

Then(/Select "(.+)" as Campaign Color/, async (color) => {
  pause();
  within('.ndl-ColorSelect-select', async () => {
    I.fillField('input', color);
    await I.click('.ndl-FormControl');
    await I.click(color);
  });
});

