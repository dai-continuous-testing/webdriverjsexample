# Mobile Automation using Appium and JavaScript programming language.

This project demonstrates Mobile Automation using Appium and JavaScript programming language.
It used WebDriverJS project and explains how to develop test in Visual Studio Code

Project is associated with the blog - Appium Automation using JavaScript - <>

### Steps to run demo test

1. Clone this git repository

	```
	git clone
	```

2. Start Appium Server using Appium Desktop installed in your PC.
   The project expects the Appium Server to run on localhost:4723. If you run the server to different host and port. Please change the code.

3. Download the Eribank application using URL : https://experitest.s3.amazonaws.com/eribank.apk to c:\\  (The code uses the Application from c:\\ (in windows). Please change the code in case you   change the download location)

4. Import the cloned project in Pycharm (In Pycharm menu, navigate to File > Open or "Open" if no projects are open)

5. Modify following variables in the code if necessary

   Open **webdriverjsTest.js** and modify following if necessary,

      Appium Server listening host and port.

      ```
      let driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();
      ```

      Path of the Eribank application (in case downloaded location is different)

      ```
       app: "c:\\eribank.apk",
      ```

      Device name (After excecuting adb devices. See "Android device recognition" in the blogs)

      ```
      deviceName: "a3ae1c63",
      ```


5. To know how execute the test, (Associated blog link - <>)
      * Please review the steps in **Creating First Test using WebDriverJS**.s
      * Please follow the section **Executing the Test**.

