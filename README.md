# Automating Hybrid Applications with Appium
This repository will hold the apps and assignments for the workshop **Automating Hybrid Applications with Appium**.

## Introduction:
During this workshop we will dive into the mysterious world of automating Hybrid Apps with Appium by using a demo 
Hybrid app which can be found [here](./apps/).\
My advice is to watch the webinar [Automating Hybrid Applications with Appium](https://youtu.be/_mPCRxplBfo) before this 
workshop as it handles the theory. It’s not mandatory because I will briefly touch it, but it would really help to
understand the basics.

We will be using:
- a local Android emulator, because this can be used on all platforms (Windows, Mac and Linux).
- WebdriverIO as an automation tool


## Prerequisites
- A Windows, Mac or Linux operating system 
- Administrator and/or installation rights on your machine
- Installed NodeJS, this needs to be an even version, so 12 or 14 (No odd versions like 11, 13, 15 which are not stable 
  versions)
  > NodeJS 14 is preferred over NodeJS 16 so we can still use WebdriverIO in a synchronous way
- You have downloaded and configured an Android Emulator and/or an iOS Simulator
- Have the latest version of Appium installed on your machine (1.20.0 or higher)
- Some basic JavaScript knowledge

How to set up NodeJS, configure an Android Emulator/iOS Simulator and Appium are explained below.

### Installing NodeJS
If you already have NodeJS installed on your machine then you may skip this step.

There are several ways to install NodeJS, this can be done by:
- downloading it from the [NodeJS](https://nodejs.org/en/download/) website and selecting your environment,
- or by using Node Version Manager.

My advice is to use Node Version Manager because this will give you the ability to easily switch between NodeJS versions in the future.

> **Note:** 
> Make sure that if you are downloading NodeJS that you are using even versions with a minimum of NodeJS 12. The odd 
> versions (11, 13, 15) are not the stable versions to use. For more information about NodeJS checkout this 
> [MeetUp recording of MoT Athens](https://youtu.be/AO49tZYoZ_8?t=4600).

#### Windows:
Follow the instructions for Windows [here](https://github.com/coreybutler/nvm-windows).

#### Mac/Linux:
Follow the instructions [here](https://github.com/nvm-sh/nvm).


### Setting up an Android Emulator or an iOS Simulator
> You can skip this if you’ve already have an emulator/simulator set up.

Android and iOS both have their own prerequisites. Please follow the installation instructions that can be found 
[here](https://youtu.be/BL3ruGJmwwk) to prepare your local machine. This will help you configure your Android Emulator
or iOS simulator.

If you configure your Android emulator, then make sure that you are using Android 10.

### Installing Appium
> If you already have Appium installed on your machine then you may skip this step.

You can follow the instructions, to install Appium on your local machine, by watching 
[this](https://youtu.be/AQD1bDX1K-k) video. You don’t need to watch the complete video, the installation part is
mentioned at the beginning and stops at 4:11 min.

As mentioned in the video, make sure you use [Appium Doctor](https://github.com/appium/appium-doctor) to verify if 
everything works as expected.

## Test your setup
To make sure everything is working you can execute the following steps:

- Clone the project to your local machine. Open a terminal, go to a folder (or create it) to where you want to store
this project. Then copy paste the following command in that terminal

        git clone https://github.com/wswebcreation/automating-hybrid-apps.git

    > **NOTE:** The assignments will be added later. To update the locally cloned repository you can open a terminal,
     go to the project folder and execute the following command `git pull`. This will get the latest code on your machine.

- then go into the directory with the following command

        cd automating-hybrid-apps

- when you are in the `automating-hybrid-apps` folder you can install all dependencies with the following command

        npm install

### Testing your Android setup
Make sure you have opened the Android emulator that you configured. Verify that the name of the emulator is the same
as the name in this [Android config](./tests/configs/wdio.android.local.emu.conf.js)-file. If not, then change the
`deviceName` to the name of your emulator.

You can now execute the following command in your terminal

    npm run android.native

This will execute a simple test on your Android emulator and should produce the following logs

```log
npm run android.native

> automating-hybrid-apps@1.0.0 android.native
> npx wdio ./tests/configs/wdio.android.local.emu.conf.js --spec=./tests/specs/android.native.spec.js


Execution of 1 workers started at 2021-05-26T08:36:10.660Z

[0-0] RUNNING in com.saucelabshybridapp.MainActivity - /tests/specs/android.native.spec.js
[0-0] PASSED in com.saucelabshybridapp.MainActivity - /tests/specs/android.native.spec.js

 "spec" Reporter:
------------------------------------------------------------------
[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing //automating-hybrid-apps/apps/Android.SauceLabs.Hybrid.app.1.0.0.apk
[emulator-5554 Android 10 #0-0] Session ID: ec3b678d-ae25-4015-ac5a-abf2ef1fd99c
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] » /tests/specs/android.native.spec.js
[emulator-5554 Android 10 #0-0] Android HybridApp
[emulator-5554 Android 10 #0-0]    ✓ should be able to login with native selectors
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] 1 passing (5.3s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:16 
```


### Testing your iOS setup
> This is not mandatory, if you have a Mac you can also check this.

Make sure you have opened the iOS simulator that you configured. Verify that the name of the simulator is the same
as the name in this [iOS config](./tests/configs/wdio.ios.local.sim.conf.js)-file. If not, then change the
`deviceName` to the name of your simulator.

You can now execute the following command in your terminal

    npm run ios.native

This will execute a simple test on your iOS simulator and should produce the following logs

```log
npm run ios.native

> automating-hybrid-apps@1.0.0 ios.native
> npx wdio ./tests/configs/wdio.ios.local.sim.conf.js --spec=./tests/specs/ios.native.spec.js


Execution of 1 workers started at 2021-05-26T08:40:52.953Z

[0-0] RUNNING in /automating-hybrid-apps/apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip - /tests/specs/ios.native.spec.js
[0-0] PASSED in /automating-hybrid-apps/apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip - /tests/specs/ios.native.spec.js

 "spec" Reporter:
------------------------------------------------------------------
[iPhone 12 iOS 14.5 #0-0] Running: iPhone 12 on iOS 14.5 executing /automating-hybrid-apps/apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip
[iPhone 12 iOS 14.5 #0-0] Session ID: e49ebe86-1ed2-4607-8234-cac94471ec85
[iPhone 12 iOS 14.5 #0-0]
[iPhone 12 iOS 14.5 #0-0] » /tests/specs/ios.native.spec.js
[iPhone 12 iOS 14.5 #0-0] iOS HybridApp
[iPhone 12 iOS 14.5 #0-0]    ✓ should be able to login with native selectors
[iPhone 12 iOS 14.5 #0-0]
[iPhone 12 iOS 14.5 #0-0] 1 passing (8.5s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:16
```


## Assignments
All assignments can be found in [this](./tests/specs/assignments)-folder. Every assignment also has an answer. The 
answers can be found in [this](./tests/specs/answers)-folder.

> **NOTE:** Yes you are able to cheat, but I leave it up to you on how you want to learn

### Assignment One: WebView vs. Native View
In this assignment we are going to look at *the ease of selecting elements in a WebView*. The assignment can be found
here [`./tests/specs/assignments/assignment.one.spec.js`](./tests/specs/assignments/assignment.one.spec.js).

Open the file in your editor and follow the instructions. If you want to run the test then open a terminal and execute
the following script(s)

    # Android:
      npm run android.assignment.one
    # iOS (if you have a Mac):
      npm run ios.assignment.one

if you want to run the answers then execute the following script(s) in the terminal

    # Android:
      npm run android.answers.one
    # iOS (if you have a Mac):
      npm run ios.answers.one

### Assignment Two: The Full Potential of WebViews
In this assignment we are going to look at *the Full Potential of WebViews*. The assignment can be found here 
[`./tests/specs/assignments/assignment.two.spec.js`](./tests/specs/assignments/assignment.two.spec.js).

Open the file in your editor and follow the instructions. If you want to run the test then open a terminal and execute
the following script(s)

    # Android:
      npm run android.assignment.two
    # iOS (if you have a Mac):
      npm run ios.assignment.two

if you want to run the answers then execute the following script(s) in the terminal

    # Android:
      npm run android.answers.two
    # iOS (if you have a Mac):
      npm run ios.answers.two
