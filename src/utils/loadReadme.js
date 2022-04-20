const showdown = require('showdown');
const fs = require('fs');
const path = require('path');

const converter = new showdown.Converter();

const sendReadmeAsHTML = (request, response) => {
  const markdownStyles = fs.readFileSync(path.join(__dirname, 'markdownStyles.css'), 'utf-8');
  const readmeText = fs.readFileSync(path.join(__dirname, '..', '..', 'readme.md'), 'utf-8');
  const htmlBody = converter.makeHtml(readmeText);

  response.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'/>
        <meta name='theme-color' content='#fff' />
        <meta name='description' content='REST API for getting information about finnish municipalities' />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <title>Restkunnat</title>
        <style>${markdownStyles}</style>
      </head>
      <body>
        <div style="display: flex; align-items: center; justify-content: center">
          <a href="https://github.com/AtteKoivukangas/restkunnat">View on Github | Atte Koivukangas</a>
        </div>
        <main>${htmlBody}</main>
      </body>
    </html>
  `);
};

module.exports = sendReadmeAsHTML;
