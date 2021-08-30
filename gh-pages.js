import {publish} from 'gh-pages'

publish(
  'build',
  {
    branch: 'gh-pages',
    repo: '',
    user: {
      name: 'Sam Schick',
      email: 'schicksw@protonmail.com'
    },
    dotfiles: true
  }, 
  () => {
    console.log("deployed")
  }
)