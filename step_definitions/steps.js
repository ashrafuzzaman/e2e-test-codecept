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
