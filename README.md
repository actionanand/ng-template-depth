# NgTemplateDepth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0. with `pnpm` node package manager

## What to do after cloning?

```bash
pnpm install
```
  - If pnpm is not installed,

```bash
npm install -g pnpm
```

## How to create project using `pnpm`

```
ng new my-new-pnpm-project --skip-install
```

* [Stackoverflow Guide](https://stackoverflow.com/questions/52948906/how-do-i-use-pnpm-in-my-angular-project-to-manage-packages)

* [PNPM CLI](https://pnpm.io/pnpm-cli)

## Development server

Run `ng serve` or `pnpm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to deploy to Github pages, if pnpm is used

1. Add 'angular-cli-ghpages' under dev dependencies as below

```json
"angular-cli-ghpages": "^1.0.0",
```
2. Add the following json property to `angular.json` file under architect

```json
  "deploy": {
    "builder": "angular-cli-ghpages:deploy"
  }
```

3. Install all the missing packages

```bash
pnpm i
```

4. Deploy the app

```bash
ng deploy --base-href=/ng-template-depth/
```

* `ng-template-depth` is the name of the repo.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
