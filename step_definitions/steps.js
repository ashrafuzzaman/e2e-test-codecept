const { I } = inject();

Given(/I am loged in as "(.+)" with password "(.+)"/, async (email, password) => {
  I.amOnPage('/');
  I.fillField('Enter your email address', email);
  I.click('Next');
  I.fillField(`Password for ${email}`, password);
  await Promise.all([
    I.click('Login'),
    I.waitForNavigation()
  ]);
  I.seeInCurrentUrl('/cloud/home');
  I.see('Your content marketing performance');
});

Then(/Switch organization to "(.+)"/, async (organizationName) => {
  let orgSwitcherSelector = { css: '.org-name-text' };
  let selectedOrg = await I.grabTextFrom(orgSwitcherSelector);
  if (selectedOrg !== organizationName) {
    I.click(orgSwitcherSelector);
    await Promise.all([
      I.click(organizationName),
      I.waitForNavigation()
    ]);
  }
});

Then(/Click on the New button on the header and click "(.+)"/, async (newItemText) => {
  I.click('New', '.global-actions');
  I.click(newItemText);
});

Then(/Click on "(.+)"/, async (text) => {
  I.click(text);
});

Then(/Write "(.+)" into textbox with placeholder "(.+)"/, async (text, placeholder) => {
  I.clearField(placeholder);
  I.fillField(placeholder, text);
});

Then(/Select "(.+)" from dropdown below "(.+)"/, async (text, placeholder) => {
  pause();
  I.click(text);
  // ndl-Select__control
  I.clearField(placeholder);
  I.fillField(placeholder, text);
});

