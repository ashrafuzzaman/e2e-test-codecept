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
  I.click({ css: '.org-name-text' });
  await Promise.all([
    I.click(organizationName, '.dropdown-menu'),
    I.waitForNavigation()
  ]);
});
