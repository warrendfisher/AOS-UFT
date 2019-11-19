Browser("Advantage Shopping").CaptureBitmap("OrderStarted.png")
Reporter.ReportEvent micDone, "Order Started", "Ready", "OrderStarted.png"
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "warren" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("SIGN IN WITH FACEBOOK").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "5dd3a6fa30c33e8558e5e232a0ea7439ae9161ac2ca5" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click
Browser("Advantage Shopping").CaptureBitmap("LoggedIn.png")
Reporter.ReportEvent micDone, "Login", "User Logged In", "LoggedIn.png"
'Reporter.ReportEvent.
Browser("Advantage Shopping").Page("Advantage Shopping").Link("LaptopsCategoryTxt").WaitProperty "innertext", "LAPTOPS", 10000 @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("LaptopsCategoryTxt").Click @@ script infofile_;_ZIP::ssf38.xml_;_
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("LAPTOPS").WaitProperty "innertext", "LAPTOPS", 10000 @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP Chromebook 14 G1(ENERGY").Click @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Advantage Shopping").CaptureBitmap("Laptop2Order.png")
Reporter.ReportEvent micDone, "Laptop Found", "Laptop to order found", "Laptop2Order.png"
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP CHROMEBOOK 14 G1(ENERGY_2").WaitProperty "innertext", "HP CHROMEBOOK 14 G1(ENERGY STAR)", 2500 @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("1").WaitProperty "innertext", "1", 2500 @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Advantage Shopping").CaptureBitmap("ShoppingCart.png")
Reporter.ReportEvent micDone, "Shopping Cart", "Cart to checkout", "ShoppingCart.png"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn_2").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("ORDER PAYMENT").WaitProperty "innertext", "ORDER PAYMENT", 2500 @@ script infofile_;_ZIP::ssf54.xml_;_
Browser("Advantage Shopping").CaptureBitmap("PaymentDetailsBefore.png")
Reporter.ReportEvent micDone, "Payment Details", "Payment details before", "PaymentDetailsBefore.png"
Browser("Advantage Shopping").Page("Advantage Shopping").WebRadioGroup("masterCredit").Select "#0"
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Card number").Click @@ script infofile_;_ZIP::ssf45.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("card_number").Set "1234 5678 9122" @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("CVV number").Click @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cvv_number").Set "1123" @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Cardholder name").Click @@ script infofile_;_ZIP::ssf50.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cardholder_name").Set "Some1 Rich" @@ script infofile_;_ZIP::ssf51.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Save changes in profile_2").Click @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("save_master_credit").Set "OFF" @@ script infofile_;_ZIP::ssf53.xml_;_
Browser("Advantage Shopping").CaptureBitmap("PaymentDetailsAfter.png")
Reporter.ReportEvent micDone, "Payment Details", "Payment details after", "PaymentDetailsAfter.png"
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf59.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ script infofile_;_ZIP::ssf60.xml_;_
Browser("Advantage Shopping").CaptureBitmap("ShoppingCartAfter.png")
Reporter.ReportEvent micDone, "Shopping Cart", "Cart after cleanup", "ShoppingCartAfter.png"
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu_2").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Advantage Shopping").CaptureBitmap("OrderFinished.png")
Reporter.ReportEvent micDone, "Order Finished", "Done", "OrderFinished.png"
