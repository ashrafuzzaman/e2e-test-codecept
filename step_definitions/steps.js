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
});

Then(/Switch organization to "(.+)"/, async (organizationName) => {
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

Then(/Select "(.+)" as Campaign Color/, async (color) => {
  within('.ndl-ColorSelect', async () => {
    await I.fillField('input', color);
    await I.pressKey('Enter');
  });
});

Then(/Fill in richtext editor with "(.+)"/, async (text) => {
  await I.click('.mce-edit-area iframe');
  await I.appendField('.mce-edit-area iframe', 'appended');
});

Then(/open "(.+)"/, async (url) => {
  await I.amOnPage(url);
});
