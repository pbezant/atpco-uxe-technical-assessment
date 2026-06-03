# atp-web: the Lift Design System

## Installing and updating

Instructions for using the library can be found on [Confluence](https://atpco-confluence.atlassian.net/wiki/x/ZIAaOQ).

For additional help, reach out to gwilk@atpco.net if you'd like to install or get updates for the `atp-web` library in your project.

## Building

Run `nx build atp-web` to build the library.

## Development

Run `nx run atp-web:storybook` to run the storybook locally.

Run `nx serve hub-design-system` to run the example app locally.

### Design Tokens

The design tokens in Figma are exported to this repo via this process:

- Using the [zeroheight - variables sync](https://www.figma.com/community/plugin/1347200437621183643) plugin for Figma to sync
  the tokens with our zeroheight.
- Do a manual download of the tokens [from our zeroheight](https://atpco.zeroheight.com/tokens/12464?token_set_source=figma_plugin)
  as JSON. Note: zeroheight does not use our SSO, so you'll need to create an account if you don't already have one.
- Adding those downloaded `.json` files to the `/style-dictionary/tokens/` folder in this repo.
- Running `npm run build-styles` to generate the CSS variables from those .json files.

### Chromatic

Chromatic is updated automatically when changes are committed to `main`.

To manually update the Chromatic site:

- run `nx run atp-web:build-storybook` to build the storybook
- run `npm run chromatic-atp-web` to deploy to Chromatic
- get the changes approved in Chromatic; they won't appear on the Chromatic site until you do this

## Releases

Use the `nx release` command to generate a new release.

## Nx

This library was generated with [Nx](https://nx.dev).
