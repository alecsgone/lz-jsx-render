module.exports = {
  prompt: [
    {
      type: 'input',
      name: 'appName',
      message: 'What is your app name?',
      default: 'Sample-JSX'
    },
    {
      type: 'list',
      name: 'preprocessor',
      message: 'What is your style preprocessor name?',
      choices: [
        { name: 'SASS with scss', value: 'scss' },
        { name: 'Stylus', value: 'styl' },
      ],
      default: 'styl'
    },
  ],
  postScripts: [
    'npm install',
    'git init'
  ]
}
