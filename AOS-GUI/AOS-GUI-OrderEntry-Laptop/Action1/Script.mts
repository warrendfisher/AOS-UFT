Function RandomString( ByVal strLen )
    Dim str
    Const LETTERS = "abcdefghijklmnopqrstuvwxyz0123456789"
    For i = 1 to strLen
        str = str & Mid( LETTERS, RandomNumber( 1, Len( LETTERS ) ), 1 )
    Next
    RandomString = str
End Function

'Test started - QS 4001 Defect 2031
Dim randomStr, captureName
randomStr = RandomString(10)
captureName = "1-OrderStarted-"+randomStr+".png"
Browser("Advantage Shopping").CaptureBitmap(captureName)
Reporter.ReportEvent micDone, "Order Started", "Ready", captureName
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "warren" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("SIGN IN WITH FACEBOOK").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "5dd3a6fa30c33e8558e5e232a0ea7439ae9161ac2ca5" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click

randomStr = RandomString(10)
captureName = "2-LoggedIn-"+randomStr+".png"
Browser("Advantage Shopping").CaptureBitmap(captureName)
Reporter.ReportEvent micDone, "Login", "User Logged In", captureName
'Reporter.ReportEvent.
Browser("Advantage Shopping").Page("Advantage Shopping").Link("LaptopsCategoryTxt").WaitProperty "innertext", "LAPTOPS", 10000 @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("LaptopsCategoryTxt").Click @@ script infofile_;_ZIP::ssf38.xml_;_
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("LAPTOPS").WaitProperty "innertext", "LAPTOPS", 10000 @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP Chromebook 14 G1(ENERGY").Click @@ script infofile_;_ZIP::ssf40.xml_;_

randomStr = RandomString(10)
captureName = "3-Laptop2Order-"+randomStr+".png"
Browser("Advantage Shopping").CaptureBitmap(captureName)
Reporter.ReportEvent micDone, "Laptop Found", "Laptop to order found", captureName
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP CHROMEBOOK 14 G1(ENERGY_2").WaitProperty "innertext", "HP CHROMEBOOK 14 G1(ENERGY STAR)", 2500 @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("1").WaitProperty "innertext", "1", 2500 @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf21.xml_;_

randomStr = RandomString(10)
captureName = "4-ShoppingCart-"+randomStr+".png"
Browser("Advantage Shopping").CaptureBitmap(captureName)
Reporter.ReportEvent micDone, "Shopping Cart", "Cart to checkout", captureName
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn_2").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("ORDER PAYMENT").WaitProperty "innertext", "ORDER PAYMENT", 2500 @@ script infofile_;_ZIP::ssf54.xml_;_

randomStr = RandomString(10)
captureName = "5-PaymentDetailsBefore-"+randomStr+".png"
Browser("Advantage Shopping").CaptureBitmap(captureName)
Reporter.ReportEvent micDone, "Payment Details", "Payment details before", captureName
Browser("Advantage Shopping").Page("Advantage Shopping").WebRadioGroup("masterCredit").Select "#0"
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Card number").Click @@ script infofile_;_ZIP::ssf45.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("card_number").Set "1234 5678 9122" @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("CVV number").Click @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cvv_number").Set "1123" @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Cardholder name").Click @@ script infofile_;_ZIP::ssf50.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cardholder_name").Set "Some1 Rich" @@ script infofile_;_ZIP::ssf51.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Save changes in profile_2").Click @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("save_master_credit").Set "OFF" @@ script infofile_;_ZIP::ssf53.xml_;_

randomStr = RandomString(10)
captureName = "6-PaymentDetailsAfter-"+randomStr+".png"
Browser("Advantage Shopping").CaptureBitmap(captureName)
Reporter.ReportEvent micDone, "Payment Details", "Payment details after", captureName
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf59.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ script infofile_;_ZIP::ssf60.xml_;_

randomStr = RandomString(10)
captureName = "7-ShoppingCartAfter-"+randomStr+".png"
Browser("Advantage Shopping").CaptureBitmap(captureName)
Reporter.ReportEvent micDone, "Shopping Cart", "Cart after cleanup", captureName
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu_2").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click @@ script infofile_;_ZIP::ssf36.xml_;_

randomStr = RandomString(10)
captureName = "8-LoggedOut-"+randomStr+".png"
Browser("Advantage Shopping").CaptureBitmap(captureName)
Reporter.ReportEvent micDone, "Order Finished", "Done", captureName
