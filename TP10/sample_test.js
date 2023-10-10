Feature('My First Test');

Scenario('test something', ({ I }) => {
  //  I.amOnPage('http://localhost:4200/');
  //  I.see('GitHub');
 //   I.see('Let’s build from here')
 //   I.scrollPageToBottom()
 //   I.seeElement("//li[contains(.,'© 2023 GitHub, Inc.')]")
});

Feature('My First Test');

Scenario('test something', ({ I }) => {
    //I.amOnPage('http://localhost:4200/');
    //I.see('GitHub');
 //   I.see('Let’s build from here');
 //   I.scrollPageToBottom();
 //   I.seeElement("//li[contains(.,'© 2023 GitHub, Inc.')]");
});

Scenario('login correcto', ({ I }) => {
    // Agrega pasos para probar el inicio de sesión correcto
    I.amOnPage('http://localhost:4200/account/login');
    I.fillField('username', 'lp');
    I.fillField('password', '123456');
    I.click('Login');
    I.see('Inicio de Sesión Exitoso'); 
});

Scenario('login incorrecto', ({ I }) => {
    // Agrega pasos para probar el inicio de sesión incorrecto
    I.amOnPage('http://localhost:4200/account/login'); 
    I.fillField('username', 'lea'); 
    I.fillField('password', 'contraseña_incorrecta'); 
    I.click('Login'); 
    I.see('Error de Inicio de Sesión');
});
