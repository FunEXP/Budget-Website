install command: npx sb@next init

Storybook uses webpack..?
https://www.youtube.com/watch?v=Kc1ULlfyUcw

Upon running npm run storybook you will encounter:
```
Instead rename main.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in /workspace/Budget-Website/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).

```
create a package.json file in `.storybook` folder

Reorganise the stories folder under src