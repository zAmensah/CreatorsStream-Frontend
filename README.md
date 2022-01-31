# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.14.

## Setting up

- install nodejs on your system if not installed
- run this in your terminal to install angular 'npm i @angular/cli@12.2.0'

## Before running server

- open project folder in terminal and run 'npm install' to install dependencies before starting server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Routes

- LoginPage = /auth/login = [src/app/auth/components/login]
- RegisterPage = /auth/register = [src/app/auth/components/register]
- ForgotPasswordPage = /auth/forgot-password = [src/app/auth/components/forgot-password]
- ResetPasswordPage = /auth/reset-password = [src/app/auth/components/reset-password]

- HomePage = / = [src/app/core/components/home]
- WatchPage = /watch/u/1 = [src/app/core/components/view-page]

- DashboardPage = /dashboard = [src/app/dasboard/components/landing]
- AddVideoPage = /dashboard/add-video = [src/app/dasboard/components/add-video]
- ChannelPage = /dashboard/channels = [src/app/dasboard/components/channels]
- SingleChannelPage = /dashboard/channels/1 = [src/app/dasboard/components/channels/single-channel]
- AddChannelPage = /dashboard/channels/add-channel = [src/app/dasboard/components/channels/add-channel]
- SettingsPage = /dashboard/settings = [src/app/dasboard/components/settings]
